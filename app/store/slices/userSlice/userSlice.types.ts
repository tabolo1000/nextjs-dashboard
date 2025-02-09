// userTypes.ts
export type UserRole = 'user' | 'admin' | 'moderator' | 'guest';
export type AccountStatus = 'active' | 'banned' | 'restricted';

export type GameProgress = {
    level: number;
    experience: number;
    achievements: string[];
};

export type SocialConnections = {
    friends: string[];
    followers: string[];
    following: string[];
};

export type UserState = {
    id: string;
    username: string;
    email: string;
    phone?: string;
    avatarUrl: string;
    loggedIn: boolean;
    role: UserRole;
    status: AccountStatus;
    lastLogin: string | null;
    gameProfile: {
        progress: GameProgress;
        inventory: string[];
        currency: number;
    };
    social: SocialConnections;
    learningProgress: {
        completedCourses: string[];
        currentCourses: string[];
        skills: Record<string, number>;
    };
    preferences: {
        theme: 'light' | 'dark';
        notifications: {
            email: boolean;
            push: boolean;
            social: boolean;
        };
        privacy: {
            profileVisible: boolean;
            searchable: boolean;
        };
    };
};

// Типы для API
export interface AuthResponse {
    access_token: string;
    user: {
        id: string;
        username: string;
        email: string;
        role: UserRole;
        avatarUrl?: string;
    };
}

export interface ErrorResponse {
    message: string;
    statusCode: number;
}