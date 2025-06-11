Imports Google.Cloud.Firestore

Namespace Entities

    <FirestoreData>
    Public Class Todo
        <FirestoreDocumentId>
        Public Property Id As String = String.Empty

        <FirestoreProperty>
        Public Property Name As String = String.Empty

        <FirestoreProperty>
        Public Property Description As String = String.Empty

        <FirestoreProperty>
        Public Property Done As Boolean = False
    End Class
End NameSpace