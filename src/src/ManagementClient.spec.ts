import { ManagementClient } from './ManagementClient';
import { SetCustomFieldDto } from './models/SetCustomFieldDto';
import { UserDto } from './models/UserDto';
import { generateRandomEmail, generateRandomPhone, generateRandomString } from './utils';

describe('ManagementClient', () => {
    const managementClient = new ManagementClient({
        userPoolId: '62591915d4fb988d2dcdd101',
        secret: '7c4d37f2764c2495fd42c8d4164a69fe',
        host: 'http://localhost:3000',
    });

    beforeAll(async () => {
        // 初始化扩展字段配置
        const data = await managementClient.setCustomFields({
            list: [
                {
                    targetType: SetCustomFieldDto.targetType.USER,
                    dataType: SetCustomFieldDto.dataType.STRING,
                    key: 'intro',
                    label: '自我介绍',
                },
                {
                    targetType: SetCustomFieldDto.targetType.USER,
                    dataType: SetCustomFieldDto.dataType.SELECT,
                    key: 'school',
                    label: '学校',
                    options: [
                        {
                            label: '北京大学',
                            value: 'pku',
                        },
                        {
                            label: '清华大学',
                            value: 'tsinghua',
                        },
                        {
                            label: 'hust',
                            value: '华中科技大学',
                        },
                        {
                            label: 'mit',
                            value: '麻省理工',
                        },
                    ],
                },
                {
                    targetType: SetCustomFieldDto.targetType.USER,
                    dataType: SetCustomFieldDto.dataType.NUMBER,
                    key: 'age',
                    label: '年龄',
                },
                {
                    targetType: SetCustomFieldDto.targetType.USER,
                    dataType: SetCustomFieldDto.dataType.BOOLEAN,
                    key: 'graduted',
                    label: '是否已经毕业',
                },
                {
                    targetType: SetCustomFieldDto.targetType.USER,
                    dataType: SetCustomFieldDto.dataType.DATETIME,
                    key: 'graduted_at',
                    label: '毕业时间',
                },
                {
                    targetType: SetCustomFieldDto.targetType.USER,
                    dataType: SetCustomFieldDto.dataType.STRING,
                    key: 'id_card',
                    label: '身份证',
                    encrypted: true,
                },
            ],
        });
        console.log(data);
    });

    describe('createUser', () => {
        describe('Success', () => {
            it('With full basic userinfo', async () => {
                const username = generateRandomString();
                const email = generateRandomEmail();
                const phone = generateRandomPhone();
                const phoneCountryCode = '+86';
                const externalId = generateRandomString();
                const name = generateRandomString();
                const nickname = generateRandomString();
                const gender = UserDto.gender.M;
                const emailVerified = true;
                const phoneVerified = true;
                const { code, data: user } = await managementClient.createUser({
                    username,
                    email,
                    phone,
                    externalId,
                    phoneCountryCode,
                    name,
                    gender,
                    nickname,
                    emailVerified,
                    phoneVerified,
                });
                expect(code).toEqual(200);
                expect(user.userId).toBeDefined();
                expect(user.status).toEqual(UserDto.status.ACTIVATED);
                expect(user.email).toBe(email);
                expect(user.phone).toBe(phone);
                expect(user.phoneCountryCode).toBe(phoneCountryCode);
                expect(user.username).toBe(username);
                expect(user.name).toBe(name);
                expect(user.nickname).toBe(nickname);
                expect(user.photo).toBeTruthy();
                expect(user.loginsCount).toBe(0);
                expect(user.lastLogin).toBe(null);
                expect(user.lastIp).toBe(null);
                expect(user.gender).toBe(gender);
                expect(user.emailVerified).toBe(emailVerified);
                expect(user.phoneVerified).toBe(phoneVerified);
                expect(user.externalId).toEqual(externalId);
            });

            it('With Custom Data', async () => {
                const username = generateRandomString();
                const customData = {
                    intro: '自我介绍',
                    school: 'pku',
                    age: 30,
                    graduted: true,
                    graduted_at: new Date(),
                    id_card: '431225xxxxxxxx3414',
                };
                const { code, data: user } = await managementClient.createUser({
                    username,
                    customData,
                });
                expect(code).toEqual(200);
                expect(user.customData).toEqual(customData);
                console.log(user);
            });
        });

        describe('Fail', () => {
            it('Not contains one of username, email and phone', async () => {
                const { code, message } = await managementClient.createUser({});
                expect(code).toEqual(400);
                expect(message).toEqual('Must contain one of the following fields: username, phone, email');
            });
        });
    });
});
