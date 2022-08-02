import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>March 19th 2022</div>
      <div className='expense-item__description'>
        <h2>baby insurance</h2>
        <div className='expense-item__price'>$15000</div>
      </div>
    </div>
  )
}

export default ExpenseItem