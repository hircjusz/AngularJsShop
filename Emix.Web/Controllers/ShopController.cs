using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Common.Logging;

namespace Emix.Web.Controllers
{
    public class ShopController : Controller
    {

        private ILog log;

        public ShopController(ILog log)
        {
            this.log = log;
        }

        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
    }
}