# 🖖 LogicKit

The LogicKit performs the following goals:
* State Management 
* Form validation 
* API integration
* Authn/Authz
* Auth Guards with Functional Groups 
* Routing 


The LogicKit acheieves these with the use of three key repeatable and scalable patterns
1. Provider Pattern
2. Reducer Pattern
3. Hooks Composition Pattern  

## 🖖 1. Provider Pattern

The Provider pattern performs 2 primary purposes: 
1.1. share state across multiple Components (without props drilling) 
1.2. inject actions into multiple components - similar to how an IoC container would use dependency injection  
 

![http://gbst-react-patterns.surge.sh/img/provider-pattern.png](http://gbst-react-patterns.surge.sh/img/provider-pattern.png)

It may be helpful to think of this as similar to the role of an AngularJs controller in sharing scope, and actions.

# 🖖 2. Reducer Pattern 
What should the Provider Pattern inject? 
The simplest way to build a scalable state machine (similar to the DAL) is to use recers  


![http://gbst-react-patterns.surge.sh/img/reducer-pattern.png](http://gbst-react-patterns.surge.sh/img/reducer-pattern.png)

