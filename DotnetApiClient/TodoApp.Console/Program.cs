using DotnetApiClient.Api;
using DotnetApiClient.Data;
using DotnetApiClient.Util;

var productsApi = new FirebaseTodosApi(
    "https://distributedapplications-73473-default-rtdb.firebaseio.com/");

await Initialize();

async Task Initialize()
{
    while (true)
    {
        Console.WriteLine("Welcome - Products CRUD Firebase");
        Console.Write($$"""
        Actions:
            1. Create Product
            2. List All Products 
            3. Exit
            
        Choose>  
        """);
        var response = Console.ReadLine();
        
        Console.Clear();
        if (!string.IsNullOrEmpty(response) && int.TryParse(response, out var chosenOption))
        {
            switch (chosenOption)
            {
                case 1: await ActionCreateProduct(); break;
                case 2: await ActionRetrieveAllProducts(); break;
                case 3: Console.WriteLine("Later!"); return;
                default: 
                    Console.WriteLine("Please type an listed option number!");
                    await Task.Delay(1000);
                    continue;
            }
        }        
        Console.Clear();
    }
}

async Task ActionCreateProduct()
{
    var name = Console.In.ReadUserString("Name: ");
    var price = Console.In.ReadUserInt("Price (R$): ");
    
    await productsApi.Save(new Todo { Name = name, Price = price });
                    
    Console.WriteLine("Product created.");
    await Task.Delay(1500);
}

async Task ActionRetrieveAllProducts()
{
    var products = await productsApi.GetAll();
    foreach (var prod in products)
    {
        Console.WriteLine($"{prod.Key}: {prod.Value}");
    }
                    
    Console.WriteLine("Press any key to continue...");
    Console.ReadKey();
}


