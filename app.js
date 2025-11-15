// Updated student database with multiple professors and complete schedule data
const studentsDatabase = [
    // Professor users
    // Professor users
    // Professor users
    {
        //https://meet.google.com/yxk-wvhb-qgs
        id: 999,
        registration_number: "1111",
        password: "1211",
        name: "Prof. Adriel Pelegrino",
        email: "adriel@falandou.com.br",
        user_type: "professor",
        professor_id: "adriel_pelegrino",
        professor_name: "Prof. Adriel Pelegrino",
        plan_status: "active",
        plan_expiry: "2030-12-31",
        credits: {
            "25_min_classes": 0,
            "50_min_classes": 10
        },
        weekly_schedule: []
    },
    {
        id: 998,
        registration_number: "prof.fernanda",
        password: "fernanda2024",
        name: "Prof. Fernanda Rocha",
        email: "fernanda@falandou.com.br",
        user_type: "professor",
        professor_id: "fernanda_rocha",
        professor_name: "Prof. Fernanda Rocha",
        plan_status: "active",
        plan_expiry: "2030-12-31",
        credits: {
            "25_min_classes": 0,
            "50_min_classes": 0
        },
        weekly_schedule: []
    },
    {   //https://meet.google.com/kws-qzan-jfx
        id: 997,
        registration_number: "prof.YsabelleDavanse",
        password: "prof.YsabelleDavanse2362",
        name: "Prof. Ysabelle Davanse",
        email: "Ysabelle@falandou.com.br",
        user_type: "professor",
        professor_id: "ysabelle_davanse",
        professor_name: "Prof. Ysabelle Davanse",
        plan_status: "active",
        plan_expiry: "2030-12-31",
        credits: {
            "25_min_classes": 0,
            "50_min_classes": 0
        },
        weekly_schedule: []
    },
    {
        id: 996,
        registration_number: "prof.ana",
        password: "ana2024",
        name: "Prof. Ana Silva",
        email: "ana@falandou.com.br",
        user_type: "professor",
        professor_id: "ana_silva",
        professor_name: "Prof. Ana Silva",
        plan_status: "active",
        plan_expiry: "2030-12-31",
        credits: {
            "25_min_classes": 0,
            "50_min_classes": 0
        },
        weekly_schedule: []
    },
    // Student users --------------------------------------------------------------
    // Alunos ---------------------------------------------------------------------
    //Estudantes ------------------------------------------------------------------
    
    {
        id: 102,
        registration_number: "102",
        password: "dario5990",
        name: "Eliel Dário",
        email: "elieldario3.0@gmail.com",
        user_type: "student",
        plan_status: "active",
        plan_expiry: "2026-11-30",
        credits: {
            "25_min_classes": 16,
            "50_min_classes": 0
        },
        weekly_schedule: []
    },
    {   //Nelsita de Conto - 103
        id: 103,
        registration_number: "103",
        password: "deconto2928",
        name: "Nelsita de Conto",
        email: "decontonelsita@gmail.com",
        user_type: "student",
        plan_status: "active",
        plan_expiry: "2026-08-04",
        credits: {
            "25_min_classes": 0,
            "50_min_classes": 136
        },
        weekly_schedule: []
    },
    {   //Gabriel Arruda - 104 - N 6
        id: 104,
        registration_number: "104",
        password: "arruda0914",
        name: "Gabriel Arruda",
        email: "ghenrique.info@gmail.com",
        user_type: "student",
        plan_status: "active",
        plan_expiry: "2025-11-02",
        credits: {
            "25_min_classes": 0,
            "50_min_classes": 5
        },
        weekly_schedule: []
    },
    {   //Emanuella Albuquerque - 105 - N 3
        id: 105,
        registration_number: "105",
        password: "Albuquerquea4474",
        name: "Emanuella Albuquerque",
        email: "Emanuellalbqrq@gmail.com",
        user_type: "student",
        plan_status: "active",
        plan_expiry: "2025-11-29",
        credits: {
            "25_min_classes": 6,
            "50_min_classes": 0
        },
        weekly_schedule: []
    },
    {   //Ester Augusto - 106 - N 1
        id: 105,
        registration_number: "106",
        password: "Augusto1254",
        name: "Ester Augusto",
        email: "Esteraugust.silva@gmail.com",
        user_type: "student",
        plan_status: "active",
        plan_expiry: "2025-12-13",
        credits: {
            "25_min_classes": 3,
            "50_min_classes": 0
        },
        weekly_schedule: []
    },
    {
        id: 40000,
        registration_number: "222",
        password: "222",
        name: "Carlos Lima",
        email: "carlos.lima@email.com",
        user_type: "student",
        plan_status: "expired",
        plan_expiry: "2025-08-15",
        credits: {
            "25_min_classes": 0,
            "50_min_classes": 0
        },
        weekly_schedule: []
    },
    {
        id: 40001,
        registration_number: "22222",
        password: "test123",
        name: "Ana Costa",
        email: "ana.costa@email.com",
        user_type: "student",
        plan_status: "active",
        plan_expiry: "2026-01-15",
        credits: {
            "25_min_classes": 15,
            "50_min_classes": 6
        },
        weekly_schedule: [
            {   //Emanuella Albuquerque - 105
                //id: "class_008",
                //date: "2025-10-15T00:00:00",
                date: "2025-10-15",
                day: "Quarta-feira",
                time: "10:00",
                timezone: "Brasília",
                topic: "Continuação: 2 - Personal Possessions",
                professor: "Adriel Pelegrino",
                //student: "Emanuella Albuquerque",
                //studentId: 105,
                duration: "25min",
                status: "scheduled",
                meetLink: "https://meet.google.com/yxk-wvhb-qgs"
            },
            {   //Emanuella Albuquerque - 105
                //id: "class_008",
                //date: "2025-10-15T00:00:00",
                date: "2025-10-15",
                day: "Quarta-feira",
                time: "10:00",
                timezone: "Brasília",
                topic: "Continuação: 2 - Personal Possessions",
                professor: "Adriel Pelegrino",
                //student: "Emanuella Albuquerque",
                //studentId: 105,
                duration: "25min",
                status: "scheduled",
                meetLink: "https://meet.google.com/yxk-wvhb-qgs"
            },
            {   //Emanuella Albuquerque - 105
                //id: "class_008",
                //date: "2025-10-15T00:00:00",
                date: "2025-10-15",
                day: "Quarta-feira",
                time: "10:00",
                timezone: "Brasília",
                topic: "Continuação: 2 - Personal Possessions",
                professor: "Adriel Pelegrino",
                //student: "Emanuella Albuquerque",
                //studentId: 105,
                duration: "25min",
                status: "scheduled",
                meetLink: "https://meet.google.com/yxk-wvhb-qgs"
            },
        ]
    },
    {
        id: 1,
        registration_number: "2111",
        password: "111",
        name: "Rogério",
        email: "Rogério_adm@Falandou.com",
        user_type: "student",
        plan_status: "active",
        plan_expiry: "2026-01-15",
        credits: {
            "25_min_classes": 98,
            "50_min_classes": 14
        },
        weekly_schedule: [
            {   //Emanuella Albuquerque - 105
                //id: "class_008",
                //date: "2025-10-15T00:00:00",
                date: "2025-10-15",
                day: "Quarta-feira",
                time: "10:00",
                timezone: "Brasília",
                topic: "Continuação: 2 - Personal Possessions",
                professor: "Adriel Pelegrino",
                //student: "Emanuella Albuquerque",
                //studentId: 105,
                duration: "25min",
                status: "scheduled",
                meetLink: "https://meet.google.com/yxk-wvhb-qgs"
            },
        ]
    }
];

// Master schedule data for professors - each professor has their own distinct classes
const masterSchedule = [
    // Prof. Adriel Pelegrino classes ONLY - id class_100001 ------------------------------------------------------------------------------
    //https://meet.google.com/yxk-wvhb-qgs
    //SEMPRE COLOCAR UM DIA A MAIS PARAR O PROFESSOR (id do professor)
    //  -----------------------------------------------------------------------------------------------------------------
    
            {   //Emanuella Albuquerque - 105 - 3
                id: "class_100001",
                date: "2025-11-12T00:00:00",
                //date: "2025-11-12",
                day: "Quarta-feira",
                time: "14:00",
                timezone: "Brasília",
                topic: "Continuação: 3 - Everyday Activities",
                professor: "Prof. Adriel Pelegrino",
                student: "Emanuella Albuquerque",
                studentId: 105,
                duration: "25min",
                status: "scheduled",
                meetLink: "https://meet.google.com/yxk-wvhb-qgs"
            },
            {   //Gabriel Arruda - 104 - N 6
                id: "class_008",
                date: "2025-11-14T00:00:00",
                //date: "2025-11-14",
                day: "Sexta-feira",
                time: "9:30",
                timezone: "Brasília",
                topic: "Continuação: 6 - City Locations",
                professor: "Prof. Adriel Pelegrino",
                student: "Gabriel Arruda",
                studentId: 104,
                duration: "50min",
                status: "scheduled",
                meetLink: "https://meet.google.com/yxk-wvhb-qgs"
            },

    // Prof. Ysabelle Davanse classes ONLY - id class_200001 ------------------------------------------------------------------------------
    //https://meet.google.com/kws-qzan-jfx
    //SEMPRE COLOCAR UM DIA A MAIS PARAR O PROFESSOR (id do professor)
    //registration_number: "prof.YsabelleDavanse",
    //password: "prof.YsabelleDavanse2362",
    //  -----------------------------------------------------------------------------------------------------------------
            
            
            {   //Nelsita de Conto - 103 - N 1
                id: "class_200001",
                date: "2025-11-13T00:00:00",
                //date: "2025-11-13",
                day: "Quinta-feira",
                time: "19:00",
                timezone: "Brasília",
                topic: "1 - Presenting Yourself",
                professor: "Prof. Ysabelle Davanse",
                student: "Ausente (DONE) Nelsita de Conto - 103",
                studentId: 103,
                duration: "50min",
                status: "scheduled",
                meetLink: "https://meet.google.com/kws-qzan-jfx"
            },
    
    // Prof. Ana Silva classes ONLY---------------------------------------------------------------------------------
    //  -----------------------------------------------------------------------------------------------------------------
    {
        id: "class_010",
        date: "2025-10-09T00:00:00",
        day: "Sexta-feira",
        time: "15:30",
        timezone: "Brasília",
        topic: "Vocabulário Avançado",
        professor: "Prof. Ana Silva",
        student: "Ana Costa",
        studentId: 40001,
        duration: "25min",
        status: "scheduled",
        meetLink: "https://meet.google.com/voc-avanc-ado"
    },
    {
        id: "class_011",
        date: "2025-10-09T00:00:00",
        day: "Sábado",
        time: "10:00",
        timezone: "Brasília",
        topic: "Reading Comprehension",
        professor: "Prof. Ana Silva",
        student: "Mariana Santos",
        studentId: 302,
        duration: "50min",
        status: "scheduled",
        meetLink: "https://meet.google.com/read-comp-ana"
    }
];

// Course data
const courseData = {
    modules: [
        {
            id: "modulo1",
            title: "Módulo Básico: Fundamentos",
            description: "Base essencial para aprendizado de inglês",
            icon: "📚",
            lessons: [
                //{
                //    id: "lesson3-4",
                //    title: "Basic English Grammar",
                //    description: "Fundamentos da gramática inglesa para iniciantes",
                //    videoId: "M7lc1UVf-VE",
                //    duration: "15:30",
                //    difficulty: "basico",
                //    status: "available"
               // },
                {
                    id: "lesson1",
                    title: "1 - Presenting Yourself - Podcast Style",
                    description: "Sharing basic personal details",
                    videoId: "1135964921",
                    duration: "28:29",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Immune System Explained - Mini Documentaries",
                    description: "The Hidden Army Inside You",
                    videoId: "1134981882",
                    duration: "2:07",
                    difficulty: "intermediario",
                    status: "available"
                },
                {
                    id: "lesson3",
                    title: "What If You Detonated a Nuclear Bomb In Rio de Janeiro - Mini Documentaries",
                    description: "What Would Happen If a Nuclear Bomb Exploded in Rio de Janeiro?",
                    videoId: "1136589727",
                    duration: "06:31",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson4",
                    title: "2 - Personal Possessions",
                    description: "Talking about items you own using simple vocabulary",
                    videoId: "1137316413",
                    duration: "35:38",
                    difficulty: "basico",
                    status: "available"
                },
                /*{
                    id: "lesson2",
                    title: "4 - Daily Schedule",
                    description: "Discussing regular routines with simple time expressions",
                    videoId: "dQw4w9WgXcQ",
                    duration: "30:55",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "5 - Meals and Drinks",
                    description: "Naming foods and expressing basic preferences",
                    videoId: "dQw4w9WgXcQ",
                    duration: "29:73",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "6 - City Locations",
                    description: "Identifying common places with basic prepositions",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "7 - Mall Stores",
                    description: "Discussing shops and basic shopping interactions",
                    videoId: "dQw4w9WgXcQ",
                    duration: "34:79",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "8 - Weather Conditions",
                    description: "Describing weather using simple terms",
                    videoId: "dQw4w9WgXcQ",
                    duration: "33:82",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "9 - Telling Time",
                    description: "Expressing time and basic scheduling",
                    videoId: "dQw4w9WgXcQ",
                    duration: "28:70",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "10 - Times of the Year",
                    description: "Naming seasons and using simple descriptive adjectives",
                    videoId: "dQw4w9WgXcQ",
                    duration: "47:04",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "11 - Household Tasks",
                    description: "Talking about chores like cleaning or cooking with basic verbs",
                    videoId: "dQw4w9WgXcQ",
                    duration: "26:49",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "12 - Casual Conversation",
                    description: "Using greetings and polite phrases for brief exchanges",
                    videoId: "dQw4w9WgXcQ",
                    duration: "25:09",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "13 - Purchasing Clothing",
                    description: "Engaging in simple shopping dialogues for clothes",
                    videoId: "dQw4w9WgXcQ",
                    duration: "29:57",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "14 - Supermarket Shopping",
                    description: "Describing grocery shopping with basic vocabulary",
                    videoId: "dQw4w9WgXcQ",
                    duration: "61:82",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "15 - Dining Out",
                    description: "Ordering food and making simple requests in a restaurant",
                    videoId: "dQw4w9WgXcQ",
                    duration: "40:30",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "16 - Beach Outings",
                    description: "Talking about beach activities with simple descriptions",
                    videoId: "dQw4w9WgXcQ",
                    duration: "26:43",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "17 - Physical Activities",
                    description: "Naming sports and describing basic participation",
                    videoId: "dQw4w9WgXcQ",
                    duration: "21:85",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "18 - Classroom Life",
                    description: "Discussing school activities and basic academic terms1",
                    videoId: "dQw4w9WgXcQ",
                    duration: "57:02",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "19 - University Life",
                    description: "Talking about college routines with slightly more detail",
                    videoId: "dQw4w9WgXcQ",
                    duration: "23:85",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "20 - Wellness",
                    description: "Describing basic health conditions and needs",
                    videoId: "dQw4w9WgXcQ",
                    duration: "17:22",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "21 - Frequent Illnesses",
                    description: "Naming common ailments with simple explanations",
                    videoId: "dQw4w9WgXcQ",
                    duration: "18:45",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "22 - Likes and Dislikes",
                    description: "Expressing preferences with basic reasoning",
                    videoId: "dQw4w9WgXcQ",
                    duration: "51:22",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "23 - Relationships with Friends",
                    description: "Describing friends using simple adjectives",
                    videoId: "dQw4w9WgXcQ",
                    duration: "32:00",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "24 - Extending Invitations",
                    description: "Inviting others with basic phrases and responses",
                    videoId: "dQw4w9WgXcQ",
                    duration: "37:74",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "25 - Characterizing Objects",
                    description: "Describing items with detailed adjectives and connectors",
                    videoId: "dQw4w9WgXcQ",
                    duration: "25:71",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "26 - Films",
                    description: "Discussing movie genres and simple plot summaries",
                    videoId: "dQw4w9WgXcQ",
                    duration: "41:01",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "27 - Television and Cinema",
                    description: "Talking about TV shows and movies with broader vocabulary",
                    videoId: "dQw4w9WgXcQ",
                    duration: "24:15",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "28 - Natural World",
                    description: "Describing landscapes or animals with moderate detail",
                    videoId: "dQw4w9WgXcQ",
                    duration: "56:85",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "29 - Sightseeing Spots",
                    description: "Talking about tourist attractions with cultural context",
                    videoId: "dQw4w9WgXcQ",
                    duration: "01:03:75",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "30 - Traveling",
                    description: "Discussing travel experiences using past and future tenses",
                    videoId: "dQw4w9WgXcQ",
                    duration: "48:32",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "31 - Journeys",
                    description: "Narrating specific trips with descriptive language",
                    videoId: "dQw4w9WgXcQ",
                    duration: "51:14",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "32 - Festive Occasions",
                    description: "Describing holidays and traditions with some detail",
                    videoId: "dQw4w9WgXcQ",
                    duration: "22:78",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "33 - Memorable Events",
                    description: "Talking about special days like birthdays with richer language",
                    videoId: "dQw4w9WgXcQ",
                    duration: "47:01",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "34 - Organizing a Celebration",
                    description: "Planning events with suggestions and future tenses",
                    videoId: "dQw4w9WgXcQ",
                    duration: "37:14",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "35 - Online Platforms",
                    description: "Discussing social media habits and platforms",
                    videoId: "dQw4w9WgXcQ",
                    duration: "34:43",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "36 - Professions",
                    description: "Describing jobs and responsibilities with some detail",
                    videoId: "dQw4w9WgXcQ",
                    duration: "47:09",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "37 - Work Life",
                    description: "Talking about workplace routines and challenges",
                    videoId: "dQw4w9WgXcQ",
                    duration: "27:27",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "38 - Irregular Verb Usage",
                    description: "Applying common irregular verbs in various tenses",
                    videoId: "dQw4w9WgXcQ",
                    duration: "30:55",
                    difficulty: "basico",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "39 - Past Events",
                    description: "Narrating experiences using past simple and continuous",
                    videoId: "dQw4w9WgXcQ",
                    duration: "61:80",
                    difficulty: "basico",
                    status: "available"
                }
            ]
        },
        {
            id: "modulo2",
            title: "Módulo Elementar: Conversação",
            description: "Desenvolvimento de habilidades de conversação",
            icon: "💬",
            lessons: [
                {
                    id: "lesson2",
                    title: "Daily Conversations",
                    description: "Conversas do dia a dia - cumprimentos e apresentações",
                    videoId: "L_jWHffIx5E",
                    duration: "22:15",
                    difficulty: "intermediario",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "intermediario",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "intermediario",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "intermediario",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "intermediario",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "intermediario",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "intermediario",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "intermediario",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Business English",
                    description: "Inglês para negócios e ambiente profissional",
                    videoId: "fJ9rUzIMcZQ",
                    duration: "25:30",
                    difficulty: "intermediario",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Travel English",
                    description: "Inglês para viagens - aeroporto, hotel, restaurante",
                    videoId: "QH2-TGUlwu4",
                    duration: "19:45",
                    difficulty: "intermediario",
                    status: "available"
                }
            ]
        },
        {
            id: "modulo3",
            title: "Módulo Avançado: Nativo",
            description: "Conteúdo avançado para fluência",
            icon: "🎓",
            lessons: [
                {
                    id: "lesson2",
                    title: "Advanced Grammar",
                    description: "Estruturas gramaticais complexas e uso avançado",
                    videoId: "NUsoVlDFqZg",
                    duration: "28:10",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Idiomatic Expressions",
                    description: "Expressões idiomáticas e gírias do inglês",
                    videoId: "xvFZjo5PgG0",
                    duration: "16:55",
                    difficulty: "avancado",
                    status: "available"
                }
            ]
        },
        {
            id: "modulo4",
            title: "Módulo Memória: Prática",
            description: "Exercícios práticos e situações reais",
            icon: "🎯",
            lessons: [
                {
                    id: "lesson2",
                    title: "Listening Exercises",
                    description: "Exercícios de compreensão auditiva avançada",
                    videoId: "Sagg08DrO5U",
                    duration: "21:40",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Pronunciation Basics",
                    description: "Pronúncia básica em inglês - sons e ritmo",
                    videoId: "dQw4w9WgXcQ",
                    duration: "12:45",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Speaking Practice",
                    description: "Prática de conversação e fluência",
                    videoId: "hFAOXdXZ5TM",
                    duration: "24:20",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Real-world Scenarios",
                    description: "Simulações de situações do mundo real",
                    videoId: "8HslUzw35mc",
                    duration: "30:15",
                    difficulty: "avancado",
                    status: "available"
                },
                {
                    id: "lesson2",
                    title: "Real-world Scenarios",
                    description: "Simulações de situações do mundo real",
                    videoId: "8HslUzw35mc",
                    duration: "30:15",
                    difficulty: "avancado",
                    status: "available"
                }*/
            ]
        }
    ]
};

// Global variables
let currentUser = null;
let selectedAnswers = {};
let userProgress = {};
let currentVideoLesson = null;
let currentProfessorFilter = 'all';

// Quiz correct answers - Quiz resposta corretas
const correctAnswers = {
    1: 'b', // Correta
    2: 'b', // Resposta
    3: 'c', // Resposta Correta
    4: 'c', // resposta correta
    5: 'b'  // resposta
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing Falandou application...');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing Falandou application...');
    
    // Set up login functionality
    setupLogin();
    
    // Set up logout functionality
    setupLogout();
    
    // Set up expired plan logout functionality
    setupExpiredPlanLogout();
    
    // Initialize tab navigation
    initializeTabNavigation();
    
    // Initialize quiz functionality
    initializeQuiz();
    
    // Initialize estudos functionality
    initializeEstudos();
    
    // Initialize course functionality
    initializeCourse();
    
    // Initialize professor functionality
    initializeProfessorArea();
    
    console.log('App initialized successfully');
}

function setupLogin() {
    console.log('Setting up login functionality...');
    
    const loginForm = document.getElementById('loginForm');
    
    if (!loginForm) {
        console.error('Login form not found');
        return;
    }
    
    // Form submission handler
    loginForm.addEventListener('submit', function(e) {
        console.log('Form submitted');
        e.preventDefault();
        e.stopPropagation();
        handleLogin();
    });
    
    console.log('Login form setup complete');
}

function handleLogin() {
    console.log('handleLogin called');
    
    try {
        // Clear any previous errors
        hideLoginError();
        
        const registrationInput = document.getElementById('registration');
        const passwordInput = document.getElementById('password');
        
        if (!registrationInput || !passwordInput) {
            console.error('Input elements not found');
            showLoginError('Erro no formulário de login.');
            return;
        }
        
        const registration = registrationInput.value.trim();
        const password = passwordInput.value.trim();
        
        console.log('Login attempt for registration:', registration);
        
        // Validate inputs
        if (!registration) {
            showLoginError('Por favor, preencha o número do seu registro.');
            registrationInput.focus();
            return;
        }
        
        if (!password) {
            showLoginError('Por favor, preencha a senha.');
            passwordInput.focus();
            return;
        }
        
        // Find user in database
        const user = studentsDatabase.find(student => 
            student.registration_number === registration && student.password === password
        );
        
        console.log('User search result:', user ? 'Found user: ' + user.name : 'Not found');
        
        if (user) {
            console.log('Login successful for:', user.name);
            currentUser = user;
            
            // Check plan status after successful login
            if (user.plan_status === 'expired') {
                console.log('User plan is expired, showing expired plan screen');
                showExpiredPlanScreen();
            } else {
                console.log('User plan is active, showing main app');
                initializeUserProgress();
                showMainApp();
                setupUserInterface();
                populateUserData();
                populateCourseContent();
                
                // If professor, populate professor area
                if (user.user_type === 'professor') {
                    populateProfessorArea();
                }
            }
        } else {
            console.log('Login failed - invalid credentials');
            showLoginError('Registro do aluno ou senha incorretos.');
            passwordInput.value = '';
            registrationInput.focus();
        }
        
    } catch (error) {
        console.error('Error in handleLogin:', error);
        showLoginError('Erro interno. Tente novamente.');
    }
}

function setupUserInterface() {
    console.log('Setting up user interface for:', currentUser.user_type);
    
    // Get UI elements
    const professorTab = document.getElementById('professorTab');
    const cursoTab = document.getElementById('cursoTab');
    
    // CRITICAL FIX: Properly handle user types
    if (currentUser.user_type === 'professor') {
        console.log('User is professor - showing professor tab');
        // Show professor tab for professors
        if (professorTab) {
            professorTab.classList.remove('hidden');
        }
    } else {
        console.log('User is student - hiding professor tab');  
        // Hide professor tab for students
        if (professorTab) {
            professorTab.classList.add('hidden');
        }
        
        // Handle course tab restrictions for expired student users only
        if (currentUser.plan_status === 'expired') {
            console.log('Student plan is expired - setting up course restrictions');
            if (cursoTab) {
                cursoTab.addEventListener('click', function(e) {
                    e.preventDefault();
                    showExpiredCourseWarning();
                });
            }
        }
    }
}

function showExpiredCourseWarning() {
    const cursoExpiredWarning = document.getElementById('cursoExpiredWarning');
    const cursoContent = document.getElementById('cursoContent');
    
    if (cursoExpiredWarning && cursoContent) {
        cursoExpiredWarning.classList.remove('hidden');
        cursoContent.classList.add('hidden');
    }
}

function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
}

function setupExpiredPlanLogout() {
    const logoutFromExpiredBtn = document.getElementById('logoutFromExpiredBtn');
    if (logoutFromExpiredBtn) {
        logoutFromExpiredBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
}

function handleLogout() {
    console.log('Logout initiated');
    currentUser = null;
    selectedAnswers = {};
    userProgress = {};
    currentVideoLesson = null;
    currentProfessorFilter = 'all';
    resetQuiz();
    closePdfViewer();
    closeVideoModal();
    showLoginScreen();
    clearLoginForm();
}

function showExpiredPlanScreen() {
    console.log('Showing expired plan screen');
    
    const loginScreen = document.getElementById('loginScreen');
    const expiredPlanScreen = document.getElementById('expiredPlanScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (loginScreen) loginScreen.classList.add('hidden');
    if (mainApp) mainApp.classList.add('hidden');
    if (expiredPlanScreen) {
        expiredPlanScreen.classList.remove('hidden');
        console.log('Expired plan screen displayed successfully');
    } else {
        console.error('Could not find expired plan screen element');
    }
}

function showMainApp() {
    console.log('Showing main application');
    
    const loginScreen = document.getElementById('loginScreen');
    const expiredPlanScreen = document.getElementById('expiredPlanScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (loginScreen) loginScreen.classList.add('hidden');
    if (expiredPlanScreen) expiredPlanScreen.classList.add('hidden');
    if (mainApp) {
        mainApp.classList.remove('hidden');
        console.log('Main app displayed successfully');
    } else {
        console.error('Could not find main app element');
    }
}

function showLoginScreen() {
    const loginScreen = document.getElementById('loginScreen');
    const expiredPlanScreen = document.getElementById('expiredPlanScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (expiredPlanScreen) expiredPlanScreen.classList.add('hidden');
    if (mainApp) mainApp.classList.add('hidden');
    if (loginScreen) {
        loginScreen.classList.remove('hidden');
        console.log('Login screen displayed');
    }
}

function showLoginError(message) {
    console.log('Showing login error:', message);
    const loginError = document.getElementById('loginError');
    if (loginError) {
        loginError.textContent = message;
        loginError.classList.remove('hidden');
    }
}

function hideLoginError() {
    const loginError = document.getElementById('loginError');
    if (loginError) {
        loginError.classList.add('hidden');
        loginError.textContent = '';
    }
}

function clearLoginForm() {
    const registrationInput = document.getElementById('registration');
    const passwordInput = document.getElementById('password');
    
    if (registrationInput) registrationInput.value = '';
    if (passwordInput) passwordInput.value = '';
    hideLoginError();
}

function populateUserData() {
    if (!currentUser) {
        console.error('No current user to populate data for');
        return;
    }
    
    console.log('Populating user data for:', currentUser.name);
    
    try {
        // Header
        const userName = document.getElementById('userName');
        if (userName) {
            userName.textContent = currentUser.name;
        }
        
        // Dashboard
        const welcomeMessage = document.getElementById('welcomeMessage');
        const credits25 = document.getElementById('credits25');
        const credits50 = document.getElementById('credits50');
        const planExpiry = document.getElementById('planExpiry');
        
        if (welcomeMessage) {
            const userTypeText = currentUser.user_type === 'professor' ? 'professor' : 'aluno';
            welcomeMessage.textContent = `Olá, ${currentUser.name}! Você entrou na plataforma como ${userTypeText}.`;
        }
        if (credits25) {
            credits25.textContent = currentUser.credits['25_min_classes'];
        }
        if (credits50) {
            credits50.textContent = currentUser.credits['50_min_classes'];
        }
        if (planExpiry) {
            planExpiry.textContent = formatDate(currentUser.plan_expiry);
        }
        
        // Profile
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        const profileRegistration = document.getElementById('profileRegistration');
        const profileUserType = document.getElementById('profileUserType');
        const profilePlanStatus = document.getElementById('profilePlanStatus');
        const profilePlanExpiry = document.getElementById('profilePlanExpiry');
        
        if (profileName) profileName.textContent = currentUser.name;
        if (profileEmail) profileEmail.textContent = currentUser.email;
        if (profileRegistration) profileRegistration.textContent = currentUser.registration_number;
        if (profileUserType) profileUserType.textContent = currentUser.user_type === 'professor' ? 'Professor' : 'Aluno';
        if (profilePlanStatus) profilePlanStatus.textContent = currentUser.plan_status === 'active' ? 'Ativo' : 'Inativo';
        if (profilePlanExpiry) profilePlanExpiry.textContent = formatDate(currentUser.plan_expiry);
        
        // Schedule - only for students
        if (currentUser.user_type === 'student') {
            populateSchedule();
        }
        
        console.log('User data populated successfully');
    } catch (error) {
        console.error('Error populating user data:', error);
    }
}

function populateSchedule() {
    const scheduleList = document.getElementById('scheduleList');
    if (!scheduleList || !currentUser || currentUser.user_type !== 'student') return;
    
    scheduleList.innerHTML = '';
    
    if (!currentUser.weekly_schedule || currentUser.weekly_schedule.length === 0) {
        scheduleList.innerHTML = '<p>Nenhuma aula agendada para esta semana.</p>';
        return;
    }
    
    currentUser.weekly_schedule.forEach(schedule => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        scheduleItem.innerHTML = `
            <div class="schedule-info">
                <h4>${schedule.topic}</h4>
                <div class="schedule-details">
                    ${schedule.day}, ${schedule.date} às ${schedule.time} (${schedule.timezone})<br>
                    Professor: ${schedule.professor} • Duração: ${schedule.duration}
                </div>
            </div>
            <div class="schedule-status">
                <span class="status status--info">${schedule.status === 'scheduled' ? 'Agendada' : schedule.status}</span>
                <button class="join-class-btn">
                    <span class="meet-icon">📹</span>
                    Entrar na Aula
                </button>
            </div>
        `;
        
        // Add click event to join class button
        const joinBtn = scheduleItem.querySelector('.join-class-btn');
        if (joinBtn && schedule.meetLink) {
            joinBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                joinGoogleMeet(schedule.meetLink, schedule.topic);
            });
        }
        
        // Make entire schedule item clickable as well
        scheduleItem.addEventListener('click', function() {
            if (schedule.meetLink) {
                joinGoogleMeet(schedule.meetLink, schedule.topic);
            }
        });
        
        scheduleList.appendChild(scheduleItem);
    });
}

function joinGoogleMeet(meetLink, classTitle) {
    console.log('Joining Google Meet:', meetLink, 'for class:', classTitle);
    
    try {
        // Open Google Meet in a new tab
        window.open(meetLink, '_blank');
        
        // Optional: Show a confirmation or feedback to the user
        console.log(`Abrindo Google Meet para a aula: ${classTitle}`);
        
    } catch (error) {
        console.error('Error opening Google Meet:', error);
        alert('Erro ao abrir o Google Meet. Verifique sua conexão e tente novamente.');
    }
}

// Professor Area Functions
function initializeProfessorArea() {
    console.log('Initializing professor area functionality');
    
    try {
        // Initialize filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                setProfessorFilter(filter);
            });
        });
        
        console.log('Professor area initialized successfully');
    } catch (error) {
        console.error('Error initializing professor area:', error);
    }
}

function setProfessorFilter(filter) {
    currentProfessorFilter = filter;
    
    // Update button states
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
    });
    
    // Refresh professor schedule display
    if (currentUser && currentUser.user_type === 'professor') {
        displayProfessorSchedule();
    }
}

function populateProfessorArea() {
    if (!currentUser || currentUser.user_type !== 'professor') {
        console.log('User is not a professor, skipping professor area population');
        return;
    }
    
    console.log('Populating professor area for:', currentUser.professor_name);
    
    try {
        // CRITICAL FIX: Get professor's classes using exact name matching
        const professorClasses = getProfessorClasses(currentUser.professor_name);
        const professorStudents = getProfessorStudents(currentUser.professor_name);
        
        console.log(`Found ${professorClasses.length} classes for ${currentUser.professor_name}`);
        console.log(`Found ${professorStudents.length} students for ${currentUser.professor_name}`);
        
        // Update statistics
        updateProfessorStats(professorClasses);
        
        // Display schedule
        displayProfessorSchedule();
        
        // Display students
        displayProfessorStudents(professorStudents);
        
        console.log('Professor area populated successfully');
    } catch (error) {
        console.error('Error populating professor area:', error);
    }
}

function getProfessorClasses(professorName) {
    // CRITICAL FIX: Exact matching to prevent cross-professor data leakage
    const classes = masterSchedule.filter(classItem => classItem.professor === professorName);
    console.log(`getProfessorClasses for "${professorName}": found ${classes.length} classes`);
    return classes;
}

function getProfessorStudents(professorName) {
    const professorClasses = getProfessorClasses(professorName);
    const studentIds = [...new Set(professorClasses.map(c => c.studentId))];
    
    return studentsDatabase.filter(student => 
        studentIds.includes(student.id) && student.user_type === 'student'
    ).map(student => {
        const studentClasses = professorClasses.filter(c => c.studentId === student.id);
        return {
            ...student,
            classCount: studentClasses.length,
            nextClass: studentClasses.find(c => new Date(c.date) >= new Date()) || null
        };
    });
}

function updateProfessorStats(professorClasses) {
    const today = new Date().toISOString().split('T')[0];
    const currentWeekStart = getWeekStart(new Date());
    
    // Calculate statistics
    const totalStudents = [...new Set(professorClasses.map(c => c.studentId))].length;
    const todayClasses = professorClasses.filter(c => c.date === today).length;
    const weekClasses = professorClasses.filter(c => {
        const classDate = new Date(c.date);
        return classDate >= currentWeekStart && classDate < new Date(currentWeekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
    }).length;
    
    // Calculate total hours
    const totalMinutes = professorClasses.reduce((total, classItem) => {
        const minutes = parseInt(classItem.duration.replace('min', ''));
        return total + minutes;
    }, 0);
    const totalHours = Math.round((totalMinutes / 60) * 10) / 10;
    
    console.log(`Professor stats - Students: ${totalStudents}, Today: ${todayClasses}, Week: ${weekClasses}, Hours: ${totalHours}`);
    
    // Update DOM elements
    const totalStudentsCount = document.getElementById('totalStudentsCount');
    const todayClassesCount = document.getElementById('todayClassesCount');
    const weekClassesCount = document.getElementById('weekClassesCount');
    const totalHoursCount = document.getElementById('totalHoursCount');
    
    if (totalStudentsCount) totalStudentsCount.textContent = totalStudents;
    if (todayClassesCount) todayClassesCount.textContent = todayClasses;
    if (weekClassesCount) weekClassesCount.textContent = weekClasses;
    if (totalHoursCount) totalHoursCount.textContent = totalHours + 'h';
}

function displayProfessorSchedule() {
    const scheduleList = document.getElementById('professorScheduleList');
    if (!scheduleList || !currentUser) return;
    
    // CRITICAL FIX: Only get classes for this specific professor
    let professorClasses = getProfessorClasses(currentUser.professor_name);
    
    // Apply filter
    const today = new Date().toISOString().split('T')[0];
    const currentWeekStart = getWeekStart(new Date());
    
    if (currentProfessorFilter === 'today') {
        professorClasses = professorClasses.filter(c => c.date === today);
    } else if (currentProfessorFilter === 'week') {
        professorClasses = professorClasses.filter(c => {
            const classDate = new Date(c.date);
            return classDate >= currentWeekStart && classDate < new Date(currentWeekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
        });
    }
    
    // Sort by date and time
    professorClasses.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}:00`);
        const dateB = new Date(`${b.date}T${b.time}:00`);
        return dateA - dateB;
    });
    
    scheduleList.innerHTML = '';
    
    if (professorClasses.length === 0) {
        const noClassesMessage = currentProfessorFilter === 'all' ? 
            'Nenhuma aula agendada.' : 
            `Nenhuma aula ${currentProfessorFilter === 'today' ? 'hoje' : 'esta semana'}.`;
        scheduleList.innerHTML = `<p>${noClassesMessage}</p>`;
        return;
    }
    
    professorClasses.forEach(classItem => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'professor-schedule-item';
        scheduleItem.innerHTML = `
            <div class="professor-class-info">
                <h4>${classItem.topic}</h4>
                <div class="professor-class-details">
                    <div class="professor-class-student">Aluno: ${classItem.student}</div>
                    <div>${classItem.day}, ${formatDate(classItem.date)} às ${classItem.time} (${classItem.timezone})</div>
                    <div>Duração: ${classItem.duration} • Status: ${classItem.status === 'scheduled' ? 'Agendada' : classItem.status}</div>
                </div>
            </div>
            <div class="professor-class-actions">
                <button class="btn btn--primary btn--sm join-meet-btn" data-meet-link="${classItem.meetLink}">
                    <span class="meet-icon">📹</span>
                    Entrar na Aula
                </button>
            </div>
        `;
        
        // Add click event to join button
        const joinBtn = scheduleItem.querySelector('.join-meet-btn');
        if (joinBtn) {
            joinBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const meetLink = this.getAttribute('data-meet-link');
                if (meetLink) {
                    joinGoogleMeet(meetLink, classItem.topic);
                }
            });
        }
        
        scheduleList.appendChild(scheduleItem);
    });
}

function displayProfessorStudents(professorStudents) {
    const studentsList = document.getElementById('professorStudentsList');
    if (!studentsList) return;
    
    studentsList.innerHTML = '';
    
    if (professorStudents.length === 0) {
        studentsList.innerHTML = '<p>Nenhum aluno encontrado.</p>';
        return;
    }
    
    professorStudents.forEach(student => {
        const studentItem = document.createElement('div');
        studentItem.className = 'professor-student-item';
        
        const nextClassInfo = student.nextClass ? 
            `Próxima aula: ${student.nextClass.topic} em ${formatDate(student.nextClass.date)}` :
            'Nenhuma aula futura agendada';
        
        studentItem.innerHTML = `
            <div class="professor-student-name">${student.name}</div>
            <div class="professor-student-details">
                <div>Email: ${student.email}</div>
                <div>Status: ${student.plan_status === 'active' ? 'Ativo' : 'Inativo'}</div>
                <div>Créditos 25min: ${student.credits['25_min_classes']} | 50min: ${student.credits['50_min_classes']}</div>
            </div>
            <div class="professor-student-classes">
                ${student.classCount} aulas agendadas<br>
                <small>${nextClassInfo}</small>
            </div>
        `;
        
        studentsList.appendChild(studentItem);
    });
}

function getWeekStart(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    return new Date(d.setDate(diff));
}

function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    } catch (error) {
        return dateString;
    }
}

function initializeTabNavigation() {
    console.log('Initializing tab navigation');
    
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            console.log('Tab clicked:', targetTab);
            
            // Handle course tab restrictions for expired users
            if (targetTab === 'curso' && currentUser && currentUser.plan_status === 'expired' && currentUser.user_type === 'student') {
                showExpiredCourseWarning();
                return;
            }
            
            // Remove active class from all tabs and contents
            navTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
                console.log('Switched to tab:', targetTab);
                
                // If switching to course tab, update progress
                if (targetTab === 'curso') {
                    updateCourseProgress();
                }
                
                // If switching to professor tab, refresh data
                if (targetTab === 'professor' && currentUser && currentUser.user_type === 'professor') {
                    populateProfessorArea();
                }
            }
        });
    });
}

function initializeQuiz() {
    console.log('Initializing quiz functionality');
    
    try {
        const optionButtons = document.querySelectorAll('.option-btn');
        const checkAnswersBtn = document.getElementById('checkAnswers');
        const resetQuizBtn = document.getElementById('resetQuiz');
        
        // Option button click handlers
        optionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const questionNumber = this.getAttribute('data-question');
                const answer = this.getAttribute('data-answer');
                
                if (!questionNumber || !answer) return;
                
                // Remove selected class from all options in this question
                const questionOptions = document.querySelectorAll(`[data-question="${questionNumber}"]`);
                questionOptions.forEach(option => option.classList.remove('selected'));
                
                // Add selected class to clicked option
                this.classList.add('selected');
                
                // Store selected answer
                selectedAnswers[questionNumber] = answer;
                
                console.log('Answer selected for question', questionNumber, ':', answer);
            });
        });
        
        // Check answers button
        if (checkAnswersBtn) {
            checkAnswersBtn.addEventListener('click', function(e) {
                e.preventDefault();
                checkQuizAnswers();
            });
        }
        
        // Reset quiz button
        if (resetQuizBtn) {
            resetQuizBtn.addEventListener('click', function(e) {
                e.preventDefault();
                resetQuiz();
            });
        }
        
        console.log('Quiz initialized with', optionButtons.length, 'option buttons');
    } catch (error) {
        console.error('Error initializing quiz:', error);
    }
}

function checkQuizAnswers() {
    try {
        const totalQuestions = Object.keys(correctAnswers).length;
        let correctCount = 0;
        
        console.log('Checking quiz answers. Selected answers:', selectedAnswers);
        
        // Check each answer and apply styling
        Object.keys(correctAnswers).forEach(questionNumber => {
            const correctAnswer = correctAnswers[questionNumber];
            const userAnswer = selectedAnswers[questionNumber];
            
            // Get all option buttons for this question
            const questionOptions = document.querySelectorAll(`[data-question="${questionNumber}"]`);
            
            questionOptions.forEach(option => {
                const optionAnswer = option.getAttribute('data-answer');
                
                // Clear previous styling
                option.classList.remove('selected', 'correct', 'incorrect');
                
                if (optionAnswer === correctAnswer) {
                    option.classList.add('correct');
                } else if (optionAnswer === userAnswer && userAnswer !== correctAnswer) {
                    option.classList.add('incorrect');
                }
            });
            
            // Count correct answers
            if (userAnswer === correctAnswer) {
                correctCount++;
            }
        });
        
        // Calculate score and XP
        const score = Math.round((correctCount / totalQuestions) * 100);
        const xpEarned = correctCount * 20;
        
        // Show results
        showQuizResults(correctCount, totalQuestions, score, xpEarned);
        
        // Disable option buttons
        const allOptionButtons = document.querySelectorAll('.option-btn');
        allOptionButtons.forEach(button => {
            button.disabled = true;
            button.style.cursor = 'not-allowed';
        });
        
        // Hide check button, show reset button
        const checkAnswersBtn = document.getElementById('checkAnswers');
        const resetQuizBtn = document.getElementById('resetQuiz');
        
        if (checkAnswersBtn) checkAnswersBtn.style.display = 'none';
        if (resetQuizBtn) resetQuizBtn.style.display = 'inline-flex';
        
        console.log('Quiz results:', correctCount, '/', totalQuestions, '- XP:', xpEarned);
    } catch (error) {
        console.error('Error checking quiz answers:', error);
    }
}

function showQuizResults(correct, total, score, xp) {
    const resultsDiv = document.getElementById('quizResults');
    const scoreDisplay = document.getElementById('scoreDisplay');
    
    if (scoreDisplay) {
        scoreDisplay.textContent = `Você acertou ${correct} de ${total} perguntas (${score}%)`;
    }
    
    if (resultsDiv) {
        resultsDiv.classList.remove('hidden');
    }
}

function resetQuiz() {
    try {
        // Clear selected answers
        selectedAnswers = {};
        
        // Remove all styling from option buttons
        const allOptionButtons = document.querySelectorAll('.option-btn');
        allOptionButtons.forEach(button => {
            button.classList.remove('selected', 'correct', 'incorrect');
            button.disabled = false;
            button.style.cursor = 'pointer';
        });
        
        // Hide results
        const resultsDiv = document.getElementById('quizResults');
        if (resultsDiv) {
            resultsDiv.classList.add('hidden');
        }
        
        // Show check button, hide reset button
        const checkAnswersBtn = document.getElementById('checkAnswers');
        const resetQuizBtn = document.getElementById('resetQuiz');
        
        if (checkAnswersBtn) checkAnswersBtn.style.display = 'inline-flex';
        if (resetQuizBtn) resetQuizBtn.style.display = 'none';
        
        console.log('Quiz reset successfully');
    } catch (error) {
        console.error('Error resetting quiz:', error);
    }
}

function initializeEstudos() {
    console.log('Initializing estudos functionality');
    
    try {
        // Initialize category tabs
        initializeCategoryTabs();
        
        // Initialize material buttons
        initializeMaterialButtons();
        
        // Initialize PDF viewer
        initializePdfViewer();
        
        console.log('Estudos functionality initialized successfully');
    } catch (error) {
        console.error('Error initializing estudos:', error);
    }
}

function initializeCategoryTabs() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const materialCategories = document.querySelectorAll('.material-category');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-category');
            console.log('Category tab clicked:', targetCategory);
            
            // Remove active class from all category tabs and content
            categoryTabs.forEach(t => t.classList.remove('active'));
            materialCategories.forEach(category => category.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding category
            this.classList.add('active');
            const targetCategoryContent = document.getElementById(targetCategory);
            if (targetCategoryContent) {
                targetCategoryContent.classList.add('active');
                console.log('Switched to category:', targetCategory);
            }
        });
    });
}

function initializeMaterialButtons() {
    const materialButtons = document.querySelectorAll('.material-btn');
    console.log('Found', materialButtons.length, 'material buttons');
    
    materialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fileId = this.getAttribute('data-file-id');
            const materialTitle = this.closest('.material-item').querySelector('.material-info h4').textContent;
            
            console.log('Material button clicked:', materialTitle, 'File ID:', fileId);
            
            if (fileId) {
                openPdfViewer(fileId, materialTitle);
            }
        });
    });
}

function initializePdfViewer() {
    const closePdfBtn = document.getElementById('closePdf');
    
    if (closePdfBtn) {
        closePdfBtn.addEventListener('click', function() {
            console.log('Close PDF button clicked');
            closePdfViewer();
        });
    }
    
    // Close PDF viewer with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const pdfViewer = document.getElementById('pdfViewer');
            if (pdfViewer && !pdfViewer.classList.contains('hidden')) {
                console.log('Closing PDF viewer with Escape key');
                closePdfViewer();
            }
        }
    });
}

function openPdfViewer(fileId, title) {
    console.log('Opening PDF viewer for:', title, 'File ID:', fileId);
    
    try {
        const pdfViewer = document.getElementById('pdfViewer');
        const pdfTitle = document.getElementById('pdfTitle');
        const pdfFrame = document.getElementById('pdfFrame');
        
        if (!pdfViewer || !pdfFrame) {
            console.error('PDF viewer elements not found');
            return;
        }
        
        // Set title
        if (pdfTitle) {
            pdfTitle.textContent = title || 'Documento PDF';
        }
        
        // Construct Google Drive preview URL - Conteúdo das Aulas
        const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        console.log('Loading PDF from URL:', previewUrl);
        
        // Set iframe source
        pdfFrame.src = previewUrl;
        
        // Show PDF viewer
        pdfViewer.classList.remove('hidden');
        
        // Prevent body scrolling
        document.body.style.overflow = 'hidden';
        
        console.log('PDF viewer opened successfully');
    } catch (error) {
        console.error('Error opening PDF viewer:', error);
    }
}

function closePdfViewer() {
    console.log('Closing PDF viewer');
    
    try {
        const pdfViewer = document.getElementById('pdfViewer');
        const pdfFrame = document.getElementById('pdfFrame');
        
        if (pdfViewer) {
            pdfViewer.classList.add('hidden');
        }
        
        if (pdfFrame) {
            pdfFrame.src = '';
        }
        
        // Restore body scrolling
        document.body.style.overflow = '';
        
        console.log('PDF viewer closed successfully');
    } catch (error) {
        console.error('Error closing PDF viewer:', error);
    }
}

// Course functionality
function initializeCourse() {
    console.log('Initializing course functionality');
    
    try {
        // Initialize video modal
        initializeVideoModal();
        
        console.log('Course functionality initialized successfully');
    } catch (error) {
        console.error('Error initializing course:', error);
    }
}

function initializeUserProgress() {
    // Initialize user progress - for demo purposes, some lessons are unlocked
    userProgress = {
        completedLessons: [],
        unlockedLessons: ['lesson1', 'lesson2', 'lesson3', 'lesson4'] // First two lessons unlocked by default
    };
}

function populateCourseContent() {
    console.log('Populating course content');
    
    // Don't populate course content for expired student users
    if (currentUser.user_type === 'student' && currentUser.plan_status === 'expired') {
        return;
    }
    
    const courseModulesContainer = document.getElementById('courseModules');
    if (!courseModulesContainer) return;
    
    courseModulesContainer.innerHTML = '';
    
    courseData.modules.forEach(module => {
        const moduleElement = createModuleElement(module);
        courseModulesContainer.appendChild(moduleElement);
    });
    
    updateCourseProgress();
}

function createModuleElement(module) {
    const moduleDiv = document.createElement('div');
    moduleDiv.className = 'course-module';
    moduleDiv.innerHTML = `
        <div class="module-header">
            <h3>${module.icon} ${module.title}</h3>
            <p>${module.description}</p>
        </div>  
        <div class="module-lessons">
            <div class="lesson-list" id="lessons-${module.id}">
                ${module.lessons.map(lesson => createLessonHTML(lesson)).join('')}
            </div>
        </div>
    `;
    
    // Add event listeners to lesson items
    const lessonItems = moduleDiv.querySelectorAll('.lesson-item');
    lessonItems.forEach(item => {
        item.addEventListener('click', function() {
            const lessonId = this.getAttribute('data-lesson-id');
            const lesson = findLessonById(lessonId);
            if (lesson && !this.classList.contains('locked')) {
                openVideoModal(lesson);
            }
        });
    });
    
    return moduleDiv;
}

function createLessonHTML(lesson) {
    const isCompleted = userProgress.completedLessons.includes(lesson.id);
    const isUnlocked = userProgress.unlockedLessons.includes(lesson.id) || isCompleted;
    const status = isCompleted ? 'completed' : (isUnlocked ? 'available' : 'locked');
    
    let icon = '▶️';
    if (isCompleted) icon = '✅';
    else if (!isUnlocked) icon = '🔒';
    
    return `
        <div class="lesson-item ${status}" data-lesson-id="${lesson.id}">
            <div class="lesson-icon ${status}">
                ${icon}
            </div>
            <div class="lesson-info">
                <h4>${lesson.title}</h4>
                <p>${lesson.description}</p>
                <div class="lesson-meta">
                    <span>⏱️ ${lesson.duration}</span>
                    <span class="difficulty-badge ${lesson.difficulty}">${lesson.difficulty}</span>
                </div>
            </div>
        </div>
    `;
}

function findLessonById(lessonId) {
    for (let module of courseData.modules) {
        const lesson = module.lessons.find(l => l.id === lessonId);
        if (lesson) return lesson;
    }
    return null;
}

function initializeVideoModal() {
    const closeModalBtn = document.getElementById('closeVideoModal');
    const markCompleteBtn = document.getElementById('markCompleteBtn');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeVideoModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeVideoModal);
    }
    
    if (markCompleteBtn) {
        markCompleteBtn.addEventListener('click', function() {
            if (currentVideoLesson) {
                markLessonAsCompleted(currentVideoLesson.id);
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const videoModal = document.getElementById('videoModal');
            if (videoModal && !videoModal.classList.contains('hidden')) {
                closeVideoModal();
            }
        }
    });
}

function openVideoModal(lesson) {
    console.log('Opening video modal for lesson:', lesson.title);
    
    const videoModal = document.getElementById('videoModal');
    const videoTitle = document.getElementById('modalVideoTitle');
    const videoDescription = document.getElementById('modalVideoDescription');
    const videoDuration = document.getElementById('modalVideoDuration');
    const videoDifficulty = document.getElementById('modalVideoDifficulty');
    const videoFrame = document.getElementById('videoFrame');
    const markCompleteBtn = document.getElementById('markCompleteBtn');
    
    if (!videoModal || !videoFrame) return;
    
    currentVideoLesson = lesson;
    
    // Set lesson information
    if (videoTitle) videoTitle.textContent = lesson.title;
    if (videoDescription) videoDescription.textContent = lesson.description;
    if (videoDuration) videoDuration.textContent = lesson.duration;
    if (videoDifficulty) {
        videoDifficulty.textContent = lesson.difficulty;
        videoDifficulty.className = `difficulty-badge ${lesson.difficulty}`;
    }
    
    // Set video URL
    const embedUrl = `https://player.vimeo.com/video/${lesson.videoId}?autoplay=1&controls=1`;
videoFrame.src = embedUrl;

    
    // Update complete button
    const isCompleted = userProgress.completedLessons.includes(lesson.id);
    if (markCompleteBtn) {
        if (isCompleted) {
            markCompleteBtn.textContent = 'Aula Concluída ✓';
            markCompleteBtn.disabled = true;
            markCompleteBtn.classList.add('btn--secondary');
            markCompleteBtn.classList.remove('btn--primary');
        } else {
            markCompleteBtn.textContent = 'Marcar como Concluído';
            markCompleteBtn.disabled = false;
            markCompleteBtn.classList.add('btn--primary');
            markCompleteBtn.classList.remove('btn--secondary');
        }
    }
    
    // Show modal
    videoModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    console.log('Closing video modal');
    
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    if (videoModal) {
        videoModal.classList.add('hidden');
    }
    
    if (videoFrame) {
        videoFrame.src = '';
    }
    
    currentVideoLesson = null;
    document.body.style.overflow = '';
}

function markLessonAsCompleted(lessonId) {
    console.log('Marking lesson as completed:', lessonId);
    
    if (!userProgress.completedLessons.includes(lessonId)) {
        userProgress.completedLessons.push(lessonId);
        
        // Unlock next lesson
        unlockNextLesson(lessonId);
        
        // Update UI
        updateCourseProgress();
        populateCourseContent();
        
        // Update complete button
        const markCompleteBtn = document.getElementById('markCompleteBtn');
        if (markCompleteBtn) {
            markCompleteBtn.textContent = 'Aula Concluída ✓';
            markCompleteBtn.disabled = true;
            markCompleteBtn.classList.add('btn--secondary');
            markCompleteBtn.classList.remove('btn--primary');
        }
        
        console.log('Lesson marked as completed successfully');
    }
}

function unlockNextLesson(completedLessonId) {
    const allLessons = courseData.modules.flatMap(module => module.lessons);
    const currentIndex = allLessons.findIndex(lesson => lesson.id === completedLessonId);
    
    if (currentIndex !== -1 && currentIndex < allLessons.length - 1) {
        const nextLesson = allLessons[currentIndex + 1];
        if (!userProgress.unlockedLessons.includes(nextLesson.id)) {
            userProgress.unlockedLessons.push(nextLesson.id);
            console.log('Unlocked next lesson:', nextLesson.id);
        }
    }
}

function updateCourseProgress() {
    const totalLessons = courseData.modules.reduce((total, module) => total + module.lessons.length, 0);
    const completedCount = userProgress.completedLessons.length;
    const progressPercentage = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;
    
    const completedLessonsSpan = document.getElementById('completedLessons');
    const totalLessonsSpan = document.getElementById('totalLessons');
    const progressFill = document.getElementById('progressFill');
    
    if (completedLessonsSpan) {
        completedLessonsSpan.textContent = completedCount;
    }
    if (totalLessonsSpan) {
        totalLessonsSpan.textContent = totalLessons;
    }
    if (progressFill) {
        progressFill.style.width = `${progressPercentage}%`;
    }
    
    console.log(`Course progress: ${completedCount}/${totalLessons} (${progressPercentage.toFixed(1)}%)`);
}

// Global error handler for debugging
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
});

console.log('JavaScript loaded successfully');
