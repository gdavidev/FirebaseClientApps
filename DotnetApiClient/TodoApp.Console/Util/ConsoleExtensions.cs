namespace DotnetApiClient.Util;

public static class ConsoleExtensions
{
    public static int ReadUserInt(this TextReader reader, string prompt)
    {
        while (true)
        {
            Console.Write(prompt);
            var val = reader.ReadLine();
            
            if (val is not null && int.TryParse(val, out var result))
            {
                return result;
            }
            else
            {
                Console.WriteLine("Input must be an integer number");
            }
        }
    }
    
    public static string ReadUserString(this TextReader reader, string prompt)
    {
        while (true)
        {
            Console.Write(prompt);
            var val = reader.ReadLine();
            
            if (val is not null)
                return val;
        }
    }
}