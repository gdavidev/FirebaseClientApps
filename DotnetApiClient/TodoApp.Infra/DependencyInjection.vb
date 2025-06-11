Imports System.Runtime.CompilerServices
Imports Google.Cloud.Firestore
Imports Microsoft.Extensions.DependencyInjection
Imports TodoApp.Infra.Services

Public Module DependencyInjection
    <Extension()>
    Public Sub AddInfrastructure(services As IServiceCollection)
        services.AddScoped(Of TodoService)()
        
        Environment.SetEnvironmentVariable(
            "GOOGLE_APPLICATION_CREDENTIALS",
            "./../../distributedapplications-credentials.json")
        services.AddSingleton(Of FirestoreDb)(
            Function(p) FirestoreDb.Create("distributedapplications-73473"))
    End Sub
End Module

