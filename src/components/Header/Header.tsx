import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import cn from "classnames";

import "../../style/Header.scss";
import "../../style/Profile.scss";
import "../../style/nav.scss";

import prof from "../../photo/person-fill.svg";
import profW from "../../photo/person.svg";
import settings from "../../photo/person-fill-gear.svg";
import settingsW from "../../photo/person-gear.svg";
import logout from "../../photo/person-fill-down.svg";
import plus from "../../photo/plus-circle-fill.svg";
import plusOpen from "../../photo/plus-circle-open.svg";
import complited from "../../photo/check-circle-fill.svg";
import tasks from "../../photo/clipboard-fill.svg";
import tasksW from "../../photo/clipboard.svg";
import taskOverviewIconInactive from "../../photo/calendar-week-fill.svg";
import taskOverviewIconActive from "../../photo/calendar-week.svg";
import { AddTask } from "../AddTask";


export const Header = () => {
  const  [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const isSignInPage = location.pathname === '/signin';
  const isSignUpPage = location.pathname === '/signup';
  const isProfilePage = location.pathname.includes('/profile');
  const isProfileMainPage = location.pathname === '/profile';
  const isTasksPage = location.pathname === '/profile/tasks';
  const isSettingsPage = location.pathname === '/profile/settings';
  const isTaskOverviewPage = location.pathname === '/profile/task-overview';
  
  const handleAddTaskButtonClick = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
    {(isSignInPage || isSignUpPage)
      && (
        <div className="container">
          <div className="nav-for-authentication">
            <NavLink 
              to="/signin" 
              className={cn('nav-for-authentication__link', {
                'nav-for-authentication__link--act': isSignInPage,
              })}
            >
              Sign in
            </NavLink>
            <NavLink 
              to="/signup" 
              className={cn('nav-for-authentication__link', {
                'nav-for-authentication__link--act': isSignUpPage,
              })}
            >
              Sign up
            </NavLink>
          </div>
        </div>
      )
    }
    {isProfilePage 
      && (
        <header className="profile__header">
          <h2 className="profile__title">Profile</h2>
          <nav className="profile__nav nav">
            <div className="nav__links">
              <div className="nav__list">
                <NavLink 
                  to="/profile" 
                  className={cn('nav__link', {
                    'nav__link--act': isProfileMainPage,
                  })}
                >
                  {isProfileMainPage 
                    ? (
                      <img src={profW} alt="profile" title="Profile" />
                    ) : (
                      <img src={prof} alt="profile" title="Profile" />
                    )
                  }  
                  <p>My Profile</p>          
                </NavLink>
                <NavLink 
                  to="profile/tasks" 
                  className={cn('nav__link', {
                    'nav__link--act': isTasksPage,
                  })}
                >
                  {isTasksPage 
                    ? (
                      <img src={tasksW} alt="tasks" title="My tasks" />
                    ) : (
                      <img src={tasks} alt="tasks" title="My tasks" />
                    )
                  }
                  <p>My Tasks</p>
                </NavLink>
                <NavLink 
                  to="/profile/task-overview" 
                  className={cn('nav__link', {
                    'nav__link--act': isTaskOverviewPage,
                  })}
                >
                  {isTaskOverviewPage 
                    ? (
                      <img src={taskOverviewIconActive} alt="task overview active" title="Task Overview" />
                    ) : (
                      <img src={taskOverviewIconInactive} alt="task overview inactive" title="Task Overview" />
                    )
                  }
                  <p>Task Overview</p>
                </NavLink>
              </div>
              <div className="nav__list">
                <button 
                  className={cn('nav__link nav__link--button', {
                    'nav__link--act': isModalOpen,
                  })}
                  onClick={handleAddTaskButtonClick}
                >
                  {isModalOpen 
                    ? (
                      <img src={plusOpen} alt="add task" title="Add task" />
                    ) : (
                      <img src={plus} alt="add task" title="Add task" />
                    )
                  }
                  <p>Add Task</p> 
                </button>
                <NavLink to="/" className="nav__link">
                  <img src={complited} alt="complited" title="Completed Tasks" />
                  <p>Completed Tasks</p>    
                </NavLink>
              </div>
            </div>
            <div className="nav__links">
              <div className="nav__list">
                <NavLink 
                  to="/profile/settings" 
                  className={cn('nav__link', {
                    'nav__link--act': isSettingsPage,
                  })}
                >
                  {isSettingsPage
                    ? (
                      <img src={settingsW} alt="settings" title="Settings"/>  
                    ) : (
                      <img src={settings} alt="settings" title="Settings"/>  
                    )
                  }  
                  <p>Settings</p>
                </NavLink>
                <NavLink to="/" className="nav__link">
                  <img src={logout} alt="log out" title="Log out" />  
                  <p>Log out</p>  
                </NavLink>
              </div>
            </div>
          </nav>
        </header>
      )}
      {isModalOpen && <AddTask onClose={handleCloseModal} />}
    </>
  )
};
