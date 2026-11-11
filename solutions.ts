

const multiplyValue = (value: number, multiplier: number = 2 ): number => {
    if(multiplier === 0) {
        return 0;
    }
    return value * multiplier;
}





const processInput = (input: string | number | boolean) : string | number => {
    if(typeof input === "string") {
        const processedString = input.trim().toLowerCase();
        return processedString;
    }
    else if (typeof input === "number") {
        return input * 10
    }
    else {
        return input ? "Active" : "Inactive";
    }
}






type Coordinate  = readonly [
    latitude: number,
    longitude: number,
    locationName: string,
]

const formatCoordinate = (data: Coordinate) : string => {
    return(
        `Location: ${data[2]} (${data[0]}, ${data[1]})`
    )
}






const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return ([] as T[]).concat(...arrays);
}






interface Course {
    title: string,
    students: number,
    isPublished: boolean,
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter(
        course => course.isPublished === true && course.students >= minStudents
    )
}






const pluckValues = <T, K extends keyof T> (items: T[], key: K): T[K][] => {
    const userKeyData: T[K][] = [];

    for(const item of items) {
        userKeyData.push(item[key]);
    }

    return userKeyData;
}






class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails (): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}


class Manager extends Employee {
    private department: string;

    constructor ( name: string, baseSalary: number, department: string ){
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo (): string {
        return `Manager of ${this.department}: ${this.name}`
    }
    
}





const validateAgeAsync = (age: number): Promise<string> => {
    const myPromise = new Promise<string>((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });

    return myPromise;
};

