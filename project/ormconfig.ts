import { Admin } from 'src/admin/entities/admin.entity';
import { Student } from 'src/student/entities/student.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'test',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'tanvir',
  entities: [Student,Teacher,Admin],
  synchronize: true,
};

export default config;