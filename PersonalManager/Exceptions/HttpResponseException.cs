using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using PersonalManager.Exceptions;

namespace PersonalManager.Exceptions
{

    public class ExceptionModel
    {
        public object Data { get; set; }
        public string Name { get; set; }
    }

    public interface IExceptionBase
    {
        int Status { get; }
        string Name { get; }
    }
}

