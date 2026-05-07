Topic Name: How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

Blog-2:

Pick and Omit TypeScript utility types prevent code duplication by enabling the creation of specialized types (subsets) derived directly from a master interface, rather than re-declaring properties. This adheres to the DRY (Don't Repeat Yourself) principle by ensuring that if a shared property changes in the master interface, all derived "slices" update automatically, eliminating the need to manually update multiple duplicate definitions.

1. The Problem: Duplication (Non-DRY Approach)
Imagine a User interface where multiple parts of the application need only subsets of it.

Coding Example:
interface User {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
  profileBio: string;
}

// Without Pick/Omit, we redefine properties
interface UserPreview {
  username: string;
  email: string;
}

interface UserUpdate {
  email: string;
  profileBio: string;
}
// If 'email' changes to 'emailAddress' in User,
// we must manually update UserPreview and UserUpdate.

2. The Solution: Pick<t, keys>
Pick creates a new type by selecting a specific set of properties (Keys) from an existing interface (T).
Use Case: Creating a view-only profile or a dropdown list.

Coding Example:
// Only pick username and email, keeping them in sync with User
type UserPreview = Pick<User, 'username' | 'email'>;

const preview: UserPreview = {
  username: 'jdoe',
  email: 'j@example.com'
  // id: 1, // Error: Property 'id' does not exist
};

DRY Benefit: If email is renamed to emailAddress in User, UserPreview automatically updates.

 3. The Solution: Omit<T, Keys>

Omit creates a new type by taking all properties from an existing interface (T) and removing specific ones (Keys).

Use Case: Creating a user profile for updating, removing fields like id or createdAt that shouldn't be edited.

Coding Example:
// Take all User properties EXCEPT id and createdAt
type UserUpdate = Omit<User, 'id' | 'createdAt'>;


const updateProfile: UserUpdate = {
  username: 'jdoe',
  email: 'j@example.com',
  profileBio: 'Hello world'
  // id: 1, // Error: id is correctly omitted
};

 DRY Benefit: If a new optional field (e.g., themePreference) is added to User, it automatically appears in UserUpdate without manual intervention.
 
Summary of DRY Benefits
•	Single Source of Truth: User defines the structure once.
•	Maintainability: Changing type definitions in one place ripples through the application.
•	Reduced Bugs: Eliminates the risk of forgetting to update a duplicate interface
