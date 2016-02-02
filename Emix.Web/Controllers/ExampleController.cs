using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Common.Logging;

namespace Emix.Web.Controllers
{
    public class ExampleController : Controller
    {
        private ILog log;
        public ExampleController(ILog log)
        {
            this.log = log;
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}