 const COURSE_DATA= [
    {
        id:1,
        course_code:"COC3080",
        course_title:"Digital Electronics",
        COS:[
            "Explain the structure and fundamental components of digital systems at transistor level with different design criteria.",
            "Demonstrate a clear understanding of important concepts and logic family.",
            "Design and explain different types of memory: RAM, ROM, PLA, PAL etc.",
            "Describe the fundamental architecture of analog-digital interfacing units such as data converters, data acquisition system etc.",
        ],
        type:"theory",
        department:"Computer Engineering"
    },

    {
        id:2,
        course_code:"COC3090",
        course_title:"MICROPROCESSOR THEORY AND APPLICATION",
        COS:[
            "Understand the instruction set architecture of 8085 microprocessor, machine cycles, and address decoding for memory and I/O interface.",
            "Understand instruction set architecture of 8086 microprocessor.",
            "Write and analyze assembly language programs in 8085 and 8086.",
            "Learn the concept of procedures, interrupt, and interrupt service routine.",
            "Explain Input and output modes and interfacing.",
        ],
        type:"theory",
        department:"Computer Engineering"
    },

    {
        id:3,
        course_code:"COC3100",
        course_title:"OPERATING SYSTEMS",
        COS:[
            "Grasp a fundamental understanding of goals, components and evolution of operating systems",
            "Learn the concepts of processes, scheduling policies, critical section problem and synchronization",
            "Understand Paging, segmentation and virtual memory concepts in modern OSs",
            "Understand the concepts of data input/output, storage and file management ",
            "Understand the main design concepts of Linux and Windows OS",
        ],

        type:"theory",
        department:"Computer Engineering"
    },
    
    {
        id:4,
        course_code:"COC3930",
        course_title:"ALGORITHMS AND OPERATION SYSTEMS LAB",
        COS:[
            "Design simple algorithms using data structures",
            "Understand the procedures defined for different operating system tasks",
            "Analyze programs in order to understand their functioning",
            "Apply various programming concepts to create simple software",
            "Interpret various errors encountered in software development process and trace their causes.",
        ],
        type:"lab",
        department:"Computer Engineering"
    },
    
    {
        id:5,
        course_code:"ELA3400",
        course_title:"Communication Engineering",
        COS:[
            "understand the concept and need of modulation",
            "comprehend the digitization of analog signals. ",
            "comprehend the digitization of analog signals. ",
            "analysis of information theory and systems based on it.",
        ],
        type:"theory",
        department:"Computer Engineering"
    },
    
    {
        id:6,
        course_code:"MEH3450",
        course_title:"Engineering Economy and Management",
        COS:[
            "Set up technically and financially sound decisions by comparing and analyzing alternative projects",
            "Develop a working knowledge of money management",
            "Define and Apply techniques, skills and modern engineering tools necessary for engineering management practice in contemporary organizations. ",
            "Choose and manage resources using different operation strategies with a view to stay ahead in offering competitive products/services",
        ],
        type:"theory",
        department:"Computer Engineering"
    },
  
    {
        id:7,
        course_code:"COC3950",
        course_title:"Minor Project Lab",
        COS:[
            "Familiarize the students with software development life cycle stages",
            "Learn to apply the design methodologies",
            "Learn to implement, test and deploy the project efficiently",
            "Develop the understanding and use of some application development environment like .Net, JVM, Eclipse etc",
            "Develop the ability to work in a team",
        ],
        type:"Lab",
        department:"Computer Engineering"
    },

]

export function getCourseByCode(id) {
    return COURSE_DATA.find((course) => course.course_code === id);
}
export function getTitleList() {
    return COURSE_DATA.map((course) => course.course_code);
}

export default COURSE_DATA