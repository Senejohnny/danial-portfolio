import React, { Component } from 'react';

var perf =require('./Blog_1.html');


class Blog_1 extends Component {
   render(){
      return (
         <iframe src={perf }></iframe>   /* like this */
      );
   }
}
export default Blog_1;