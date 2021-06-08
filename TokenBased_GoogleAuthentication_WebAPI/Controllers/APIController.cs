using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TokenBased_GoogleAuthentication_WebAPI.Controllers
{
    public class APIController : ApiController
    {
        [Authorize]
        public String Get() {
            return "TechnoBoy ";
        }
    }
}
