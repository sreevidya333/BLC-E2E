using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bng_flow_3.Controllers
{
    public class Review : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
