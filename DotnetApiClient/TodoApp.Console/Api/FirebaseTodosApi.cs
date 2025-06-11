using DotnetApiClient.Data;
using Refit;

namespace DotnetApiClient.Api;

public class FirebaseTodosApi(string realtimeDatabaseUrl)
{
    public async Task Save(Todo todo)
    {
        var firebase = RestService.For<IFirebaseApiClient>(realtimeDatabaseUrl);
    
        await firebase.SetDataAsync(
            "distributedApps/products",
            new
            {
                name = todo.Name,
                price = todo.Price
            });
    }

    public async Task<Dictionary<string, object>> GetAll()
    {
        var firebase = RestService.For<IFirebaseApiClient>(realtimeDatabaseUrl);
        return await firebase.GetDataAsync("distributedApps/products");
    }
}