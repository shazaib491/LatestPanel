import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <>
             <nav
          class="sidenav navbar navbar-vertical    navbar-expand-xs navbar-light bg-white "
          id="sidenav-main "
        >
          <div class="scrollbar-inner ">
            <div class="sidenav-header  align-items-center ">
              <a class="navbar-brand" href="javascript:void(0)">
                <img
                  src="assets/img/brand/menu.jpg"
                  class="navbar-brand-img w-50"
                  alt="..."
                />
              </a>
            </div>
            <div class="navbar-inner" >
              <div class="collapse navbar-collapse " id="sidenav-collapse-main">
                <ul class="navbar-nav ">
                  <li class="nav-item">
                    <a class="nav-link " href="dashboard.html">
                      <i class="ni ni-tv-2 text-white bg-primary text-center"></i>
                    </a>
                  </li>
                </ul>
                <hr class="my-3" />
              </div>
            </div>
          </div>
        </nav>
        
            </>
        )
    }
}
