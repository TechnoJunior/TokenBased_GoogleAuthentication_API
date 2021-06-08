using System.Web;
using System.Web.Mvc;

namespace TokenBased_GoogleAuthentication_WebAPI
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
