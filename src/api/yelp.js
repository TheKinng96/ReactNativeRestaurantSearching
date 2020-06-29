import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer PGcq2l-6mlnVJhb94y6a5KSK1f23DG58Y8odnN6iWP6xYQZNBaqCU7EFZqf3mEzt9RLV-a1jowbLqhAkcstOal4xHJSr32npSsqlt1Ye-ECbgioZTrqUezPgtlr4XnYx'
  }
});
