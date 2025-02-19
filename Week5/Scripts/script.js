const courses = [
    { id: 1, name: 'Math 101', prereqs: ['None'] },
    { id: 2, name: 'Physics 101', prereqs: ['Math 101'] },
    { id: 3, name: 'Chemistry 101', prereqs: ['None'] },
    { id: 4, name: 'Computer Science 101', prereqs: ['Math 101'] },
  ];
  
  function displayCourses() {
    const courseListDiv = document.getElementById('courses-list');
    courseListDiv.innerHTML = '';
  
    courses.forEach(course => {
      const courseDiv = document.createElement('div');
      courseDiv.textContent = course.name;
      courseDiv.classList.add('course');
      courseDiv.draggable = true;
      courseDiv.id = `course-${course.id}`;
      courseDiv.setAttribute('data-course-id', course.id);
  
      courseDiv.addEventListener('dragstart', dragstartHandler);
      courseDiv.addEventListener('dragend', dragEndHandler);
  

      courseDiv.addEventListener('click', () => showCourseDetails(course));
  
      courseListDiv.appendChild(courseDiv);
    });
  }
  

  function dragstartHandler(ev) {
    console.log('Drag started:', ev.target);
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
  }
  
  function dragEndHandler(ev) {
    console.log('Drag ended:', ev.target);
    ev.target.classList.remove('dragging');
  }
  
  function dragoverHandler(ev) {

    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
    console.log('Drag over:', ev.target);
  }
  
  function dropHandler(ev) {
    ev.preventDefault();
    console.log('Drop occurred:', ev.target);


    const data = ev.dataTransfer.getData("application/my-app");
    const draggedElement = document.getElementById(data);


    const semesterSection = ev.target.closest('.semester');

    if (semesterSection) {
        console.log('Dropping onto a valid semester');
        semesterSection.appendChild(draggedElement); 
        draggedElement.classList.remove('dragging'); 
    } else {
        console.log('Invalid drop target');
    }
}

  function showCourseDetails(course) {
    const detailsDiv = document.getElementById('course-details');
    detailsDiv.innerHTML = `
      <h3>Course Details</h3>
      <p><strong>Course Name:</strong> ${course.name}</p>
      <p><strong>Prerequisites:</strong> ${course.prereqs.join(', ')}</p>
    `;
  }
  

  displayCourses();
  