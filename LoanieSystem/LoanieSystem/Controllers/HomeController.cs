using System;
using System.Linq;
using System.Web.Mvc;

namespace LoanieSystem.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult LoanList()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Uowme()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult NewLoan()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}