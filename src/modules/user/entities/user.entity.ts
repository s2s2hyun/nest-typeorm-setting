import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'app_member' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, comment: 'idx' })
  member_idx: number;

  @Column({
    type: 'varchar',
    unique: true,
    comment: '멤버 이메일',
  })
  member_email: string;

  @Column({ type: 'varchar' })
  member_password: string;

  @Column({ type: 'varchar' })
  member_name: string;

  @Column({ type: 'varchar' })
  member_phone: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: '멤버 생성 시간',
  })
  member_created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    comment: '멤버 수정 시간',
  })
  member_updated_at: Date;
}
