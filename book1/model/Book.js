class Book{
  constructor(Book_num,Book_name,Writer,Sort_id,Price,Pub_company,Pub_date,Total_num,Current_num,Buy_date,Brief){
    this.Book_num=Book_num;
    this.Book_name=Book_name;
    this.Writer=Writer;
    this.Sort_id=Sort_id;
    this.Price=Price;
    this.Pub_company=Pub_company;
    this.Pub_date=Pub_date;
    this.Total_num=Total_num;
    this.Current_num=Current_num;
    this.Buy_date=Buy_date;
    this.Brief=Brief;
  }
}

module.exports = Book;