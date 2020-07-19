use employees;

INSERT INTO department
    (name)
    VALUES  
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');
    
    INSERT INTO role
        (title, salary, department_id)
        VALUES('Sales Lead', 100000, 1),
        ('Salesperson', 80000, 1),
        ('Lead Engineer', 150000, 2)
        ('Software Engineer', 120000, 2),
        ('Account Manager', 160000, 3),
        ('Account', 125000, 3),
        ('Legal Team Lead', 250000, 4),
        ('Lawyer', 190000, 4);

        INSERT INTO employee
        (first_name, last_name, role_id, manager_id)
        VALUES
         ('Hal', 'Jordan', 1, NULL),
         ('Vic', 'Stone', 2, 1),
         ('Clark', 'Kent', 3, NULL),
         ('Oliver', 'Queen', 4, 3),
         ('Lex', 'Luthor', 5, NULL),
         ('Arthur', 'Currey', 6, 5),
         ('Bruce', 'Wayne', 7, NULL),
         ('Barry', 'Allen', 8, 7);