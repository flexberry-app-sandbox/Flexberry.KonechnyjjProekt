



CREATE TABLE "СогласиеНаОпд"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерДок" NUMBER(10) NOT NULL,

	"Подписано" NUMBER(1) NULL,

	"Отправлено" NUMBER(1) NULL,

	"Дата" DATE NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодДол" NUMBER(10) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ГрафикиОтпуска"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерДок" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"ДатаНач" DATE NULL,

	"КолДней" NUMBER(10) NULL,

	"Отправлено" NUMBER(1) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Отделы"
(

	"primaryKey" RAW(16) NOT NULL,

	"КотОтдела" NUMBER(10) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СоставРасчета"
(

	"primaryKey" RAW(16) NOT NULL,

	"Тип" NVARCHAR2(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Сумма" FLOAT(126) NULL,

	"Ндфл" FLOAT(126) NULL,

	"Взносы" FLOAT(126) NULL,

	"Всего" FLOAT(126) NULL,

	"РасчетныйЛист" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РасчетныйЛист"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерДок" NUMBER(10) NOT NULL,

	"ИтогоНачис" FLOAT(126) NULL,

	"ИтогоУдер" FLOAT(126) NULL,

	"ИтогоКПере" FLOAT(126) NULL,

	"Отправлено" NUMBER(1) NULL,

	"Дата" DATE NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодСот" NUMBER(10) NOT NULL,

	"Фамилия" NVARCHAR2(255) NULL,

	"Имя" NVARCHAR2(255) NULL,

	"Отчество" NVARCHAR2(255) NULL,

	"СерияПас" NUMBER(10) NULL,

	"НомерПас" NUMBER(10) NULL,

	"Отделы" RAW(16) NOT NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "СогласиеНаОпд"
	ADD CONSTRAINT "СогласиеНаОп_1451" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "СогласиеНаОп_5396" on "СогласиеНаОпд" ("Сотрудники");

ALTER TABLE "ГрафикиОтпуска"
	ADD CONSTRAINT "ГрафикиОтпус_7503" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ГрафикиОтпус_4249" on "ГрафикиОтпуска" ("Сотрудники");

ALTER TABLE "СоставРасчета"
	ADD CONSTRAINT "СоставРасчета_350" FOREIGN KEY ("РасчетныйЛист") REFERENCES "РасчетныйЛист" ("primaryKey");

CREATE INDEX "СоставРасчет_6649" on "СоставРасчета" ("РасчетныйЛист");

ALTER TABLE "РасчетныйЛист"
	ADD CONSTRAINT "РасчетныйЛист_120" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "РасчетныйЛист__28" on "РасчетныйЛист" ("Сотрудники");

ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FО_9250" FOREIGN KEY ("Отделы") REFERENCES "Отделы" ("primaryKey");

CREATE INDEX "Сотрудники_IО_3561" on "Сотрудники" ("Отделы");

ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FД_4635" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудники_IД_6967" on "Сотрудники" ("Должности");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


