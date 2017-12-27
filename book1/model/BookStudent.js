class BookStudent{
  constructor(Id,Book_num,Student_code,borrow_date,return_date){
    this.Id=Id;
    this.Book_num=Book_num;
    this.Student_num=Student_num;
    this.borrow_date=borrow_date;
    this.return_date=return_date;
  }
}

module.exports = BookStudent;