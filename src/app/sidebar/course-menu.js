import React from 'react';

import Category from './course-menu-category';

export function CourseMenu({ children, title }) {
    return (
        <aside className="course-menu header">
            <header>
                <i className="fa fa-chevron-left"></i>
                <span>
                    {title}
                </span>
            </header>
            <section className="course-menu-categories">
              {children}
            </section>
            <Footer />
        </aside>
    );
}
function Footer() {
    return (
        <footer>
            <div className="FooterAutoPlayMode">
                <span>Auto Play</span>
            </div>
            <div className="FooterEditMode">
                <span>Edit Mode</span>
            </div>
        </footer>
    );
}

