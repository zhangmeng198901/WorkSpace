Ѳ��ƽ̨����
client��:
����mysql��Ҫ��ش����û� :  ('patrol_user', 'patrol_user');
��������:
 GRANT SELECT, PROCESS, SUPER, REPLICATION CLIENT ON *.* TO 'patrol_user'@'192.168.XXXX' IDENTIFIED BY PASSWORD '*A5903248944BB583CED1E91EFB75A0C56EB5BC32' 

��װnrpe
������nrpe.conf�����:
����
#add by wubx 
command[get_load]=/usr/local/nagios/libexec/get_load
command[get_cpu]=/usr/local/nagios/libexec/get_cpu
command[get_mem]=/usr/local/nagios/libexec/get_mem
command[get_traffic]=/usr/local/nagios/libexec/get_traffic eth0
command[get_diskinfo]=/usr/local/nagios/libexec/get_diskinfo sda
command[get_diskstatus]=/usr/local/nagios/libexec/get_diskstatus
#add by  hzy
command[get_log_wr]=/usr/local/nagios/libexec/get_log_wr -i $ARG1$ -d $ARG2$ -p $ARG3$

ץ��֧��:


server��:
����������Ҫnrpe, һ������°�nagisҲ��װ��ȥ
��װmysql����patrol_db ��ʼ���ű�ȡ192.168.110.18�ϵ�patrol_db��schema
mkdir /usr/local/nagios/patrol/
Ȼ���svn �е�patrolĿ¼copy��ȥ.

���붨ʱ����:
*/5 * * * * /usr/local/nagios/patrol/bin/cron_5_min.sh
00 00 * * * /usr/local/nagios/patrol/bin/get_day_info.pl
