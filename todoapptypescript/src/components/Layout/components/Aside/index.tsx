import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './components';
import './styles.css';

const Aside: FC = () => {
  return (
    <aside className='aside bg-dark'>
      <Logo />
      <div className='accordion' id='accordionMenu'>
        <div className='accordion-item'>
          <div className='accordion-header' id='headingUsers'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseUsers'
              aria-expanded='false'
              aria-controls='collapseUsers'
            >
              <i className='bi bi-person'></i> Users
            </button>
          </div>
          <div
            id='collapseUsers'
            className='accordion-collapse collapse collapse'
            aria-labelledby='headingUsers'
            data-bs-parent='#accordionMenu'
          >
            <div className='accordion-body'>
              <Link to='/users/list'>Ver</Link>
              <Link to='/users/add'>Agregar</Link>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <div className='accordion-header' id='headingTasks'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTasks'
              aria-expanded='false'
              aria-controls='collapseTasks'
            >
              <i className='bi bi-card-list'></i> Tasks
            </button>
          </div>
          <div
            id='collapseTasks'
            className='accordion-collapse collapse collapse'
            aria-labelledby='headingTasks'
            data-bs-parent='#accordionMenu'
          >
            <div className='accordion-body'>
              <Link to='/tasks/list'>Ver</Link>
              <Link to='/tasks/add'>Agregar</Link>

            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <div className='accordion-header' id='headingSettings'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseSettings'
              aria-expanded='false'
              aria-controls='collapseSettings'
            >
              <i className='bi bi-sliders'></i> Settings
            </button>
          </div>
          <div
            id='collapseSettings'
            className='accordion-collapse collapse collapse'
            aria-labelledby='headingSettings'
            data-bs-parent='#accordionMenu'
          >
            <div className='accordion-body'>
              <Link to='/'>General</Link>
              <Link to='/'>Multimedia</Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export { Aside };
