package Konechnyjj_proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Konechnyjj_proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Отделы
 */
@Entity(name = "IISKonechnyjj_proektОтделы")
@Table(schema = "public", name = "Отделы")
public class Otdely {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КотОтдела")
    private Integer кототдела;

    @Column(name = "Наименование")
    private String наименование;


    public Otdely() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКотОтдела() {
      return кототдела;
    }

    public void setКотОтдела(Integer кототдела) {
      this.кототдела = кототдела;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}