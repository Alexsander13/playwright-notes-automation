export interface RegisterUserDto {
  name: string;
  email: string;
  password: string;
}

export interface CreateNoteDto {
  title: string;
  description: string;
  category: string;
}
