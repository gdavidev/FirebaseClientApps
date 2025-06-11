using Refit;

namespace DotnetApiClient.Api;

public interface IFirebaseApiClient
{
    [Get("/{path}.json")]
    Task<Dictionary<string, object>> GetDataAsync(string path);
    
    [Put("/{path}.json")]
    Task<object> SetDataAsync(string path, [Body] object data);

    [Delete("/{path}.json")]
    Task DeleteDataAsync(string path);
}