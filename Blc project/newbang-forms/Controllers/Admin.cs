﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace newbang_forms.Controllers
{
    public class Admin : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
