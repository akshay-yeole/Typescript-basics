//It is a TS file which contains one or more "exports".

//Example ::
//1. create one file like Greeter and add simple function over there.
//2. Now consume it in another file using module import.

import { Greets } from "./Greeter";
//OR
import * as utilities from "./Greeter";

Greets();

utilities.Greets();

//Types of exports ::
//1. Named Export
//2. Default Export


