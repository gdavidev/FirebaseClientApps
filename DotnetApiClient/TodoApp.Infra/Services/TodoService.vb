Imports Google.Cloud.Firestore
Imports TodoApp.Infra.Entities

Namespace Services
    Public Class TodoService
        Private ReadOnly _db As FirestoreDb
        
        Public Sub New(db As FirestoreDb)
            _db = db
        End Sub
        
        Public Async Function GetAllTodos() As Task(Of List(Of Todo))
            Dim todos = New List(Of Todo)()

            Dim todosRef As CollectionReference = _db.Collection("todos")
            Dim snapshot As QuerySnapshot = await todosRef.GetSnapshotAsync()

            For Each doc As DocumentSnapshot In snapshot.Documents
                If doc.Exists
                    Dim todo = doc.ConvertTo(Of Todo)()
                    todo.Id = doc.Id
                    
                    todos.Add(todo)
                End If
            Next

            Return todos
        End Function
        
        Public Async Function AddTodoAsync(todo As Todo) As Task(Of String)
            Dim newDocRef = Await _db.Collection("todos").AddAsync(todo)
            Return newDocRef.Id
        End Function
        
        Public Async Function SetDoneAsync(todoId As String, newState As Boolean) As Task
            Await _db.Collection("todos").Document(todoId).UpdateAsync("Done", newState)
        End Function
        
        Public Async Function UpdateTodoAsync(todo As Todo) As Task
            Dim docRef As DocumentReference = _db.Collection("todos").Document(todo.Id)
            Await docRef.SetAsync(todo)
        End Function

        Public Async Function GetTodoAsync(todoId As Integer) As Task(Of Todo)
            Dim docRef As DocumentReference = _db.Collection("todos").Document(todoId)
            Dim snapshot As DocumentSnapshot = Await docRef.GetSnapshotAsync()

            If Not snapshot.Exists 
                return Nothing
            Else
                Return snapshot.ConvertTo(Of Todo)()  
            End If
        End Function

        Public Async Function DeleteTodoAsync(todoId As Integer) As Task
            Await _db.Collection("todos").Document(todoId).DeleteAsync()           
        End Function
    End Class
End NameSpace