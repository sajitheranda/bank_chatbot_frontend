import React from 'react'
import './fullpagescroller.css'
import Fullpage,{FullpageSection,FullPageSections,FullpageNavigation} from '@ap.cx/react-fullpage'

export default function Fullpagescroller() {
    const scrollToSection = (sectionIndex) => {
        // Use JavaScript to scroll to the specified section
        const sections = document.querySelectorAll('.fullpage-section');
        if (sections && sections[sectionIndex]) {
          sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
        }
      };


  return (
    <div>
        <Fullpage>
            {/* <FullpageNavigation>
            </FullpageNavigation> */}
            <FullPageSections>
                <FullpageSection id="section1" style={{ height: "100vh" }}>
                     <div className='screen1'>Screen 1</div>
                </FullpageSection>
            <FullpageSection id="section1" style={{ height: "100vh" }} >
                     <div className='screen2'>Screen 2</div>
            </FullpageSection>
            <FullpageSection id="section1" style={{ height: "100vh" }} >
                    <div className='screen3'>Screen 2</div>
            </FullpageSection>
            </FullPageSections>
            
        </Fullpage>
    </div>
    
  )
}
