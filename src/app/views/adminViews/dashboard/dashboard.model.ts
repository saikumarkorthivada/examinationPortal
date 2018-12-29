export class Questions {
    data = {
        // subject will be dynamic value name should be passed
        subject: {
            // sections we can pass dynamic
            sectionA: {
                pattern: 'multiple',
                maxNumberOfQustions: 5,
                eachQuestionMarks: 5,
                sectionMarks: 5 * 5,
                description: 'description for each section',
                rules: ['rule 1', 'rule 2'],
                content: [
                    {
                        id: 1,
                        question: 'what is your name',
                        options: [
                            'sai',
                            'mani',
                            'kumar',
                            'none'
                        ]
                    },
                    {
                        id: 1,
                        question: 'what is your name',
                        options: [
                            'sai',
                            'mani',
                            'kumar',
                            'none'
                        ]
                    },
                    {
                        id: 1,
                        question: 'what is your name',
                        options: [
                            'sai',
                            'mani',
                            'kumar',
                            'none'
                        ]
                    },
                    {
                        id: 1,
                        question: 'what is your name',
                        options: [
                            'sai',
                            'mani',
                            'kumar',
                            'none'
                        ]
                    },
                    {
                        id: 1,
                        question: 'what is your name',
                        options: [
                            'sai',
                            'mani',
                            'kumar',
                            'none'
                        ]
                    }
                ]
            }
        }
    };
}
