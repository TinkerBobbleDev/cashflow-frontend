import "./App.css";
import AddExpense from "./components/AddExpense/AddExpense";
import AddExpenseFormWithImg from "./components/AddExpense/AddExpenseFormWithImg";
import TopNav from "./components/TopNav/TopNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ReminderPage from "./pages/reminders/ReminderPage";
import GoalPage from "./pages/goals/GoalPage";
import AllReminders from './pages/AllReminders';
import AllGoals from './pages/AllGoals';

function App() {
  return (
    <Router>
      <TopNav />

      <Routes>
        <Route exact path="/" element={<Dashboard />}></Route>
        <Route exact path="/add-expense" element={<AddExpense />}></Route>
        <Route exact path="/add-expense-img" element={<AddExpenseFormWithImg />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/reminders" element={<ReminderPage />}></Route>
        <Route path="/allreminders" element={<AllReminders />}></Route>
        <Route path="/allgoals" element={<AllGoals />}></Route>
        <Route path="/goals" element={<GoalPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
