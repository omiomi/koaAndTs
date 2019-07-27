import * as React from "react"
const {Suspense,lazy} = React;
import {Switch,RouterProps,Route} from "react-router-dom"
const Home = lazy(()=>
    import(/**webpackChunkName:"home"*/"../components/Home")
)
const routes:RouterProps[]=[
    {
    path:"/",
    exact:true,
    component:Home
    }
]
const Routes =()=>(
   <Suspense fallback={<i>loading...</i>}>
       <Switch>
       {routes.map(item=>{
           const {path,exact,component} = item;
           const LazyComp = component;
           return (
               <Route key={path} exact={exact} render={()=><LazyComp/>} />
           )
       })}
       </Switch>
   </Suspense>
)
export default Routes;