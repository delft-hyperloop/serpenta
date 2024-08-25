# Architecture

One of the main goals of Serpenta is to decouple the View as much as possible from the Control; i.e., provide a safe, 
clean and efficient UI library with defined exposing interfaces and allow for the developer to create their own 
communication with their pod (given that they chose not to use the default `GrandDataDistributor`). 