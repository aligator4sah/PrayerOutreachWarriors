export class PrayRequest {
    id: Number;
    title: String;
    description: String;
    category: String;
    completed: Boolean;
    createdBy: User;
    createdFor: User;
    createdTime: Date;
    completedTime: Date;
    comment: String;
}

export class User {
    id: Number;
    firstName: String;
    lastName: String;
    address: String;
    city: String;
    state: String;
    country: String;
}

export class Location {
    longtitude: Number;
    latitude: Number;
    address: String;
    city: String;
    state: String;
    zipcode: Number;
}