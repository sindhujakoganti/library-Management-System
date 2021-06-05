import React from 'react'
import axios from "axios";
import AvailableBooksToBorrow from './borrowBooks'


export class AvailableBooks extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            books: [],
            users: [],
            booksBorrowed: [],
            isBorrowed: false,
            userId: 1,
            bookId: 1
        }
    }

    async componentDidMount(){
        axios({
            method: 'get',
            url: 'http://localhost:8000/users',
          })
          .then(response => response.json())
          .then(res => {
                  this.setState({
                    ...this.state,
                      users: res
                  })
              }).catch(err => err)

        axios({
            method: 'get',
            url: 'http://localhost:8000/books',
          })
          .then(response => response.json())
          .then(res => {
                  this.setState({
                    ...this.state,
                      books: res
                  })
              }).catch(err => err)

        // axios({
        //         method: 'get',
        //         url: `http://localhost:8000/booksBorrowed/${this.state.userId}`,
        //       })
        //       .then(response => response.json())
        //       .then(res => {
        //               this.setState({
        //                 ...this.state,
        //                 booksBorrowed: res
        //               })
        //           }).catch(err => err)
        
      
    }

    handleCheckBoxChange= async (event, bookId, isBorrowed) => {
        event.preventDefault();

       if(this.state.booksBorrowed.length === 3){
           // warning message
       }
       else {
        await axios({
            method: 'put',
            url: `http://localhost:8000/booksBorrowed`,
            data: {
             status: !isBorrowed === true ? "Borrowed" : "Available"
           }
          });

          const res = await axios({
              method: 'get',
              url: 'http://localhost:8000/books',
            })
    
            this.setState({
              ...this.state, 
              books: res.data,
              bookId
            })
       }
      }

    render() {
        return <AvailableBooksToBorrow books={this.state.books}  handleCheckBoxChange={this.handleCheckBoxChange}/>
    }
}
