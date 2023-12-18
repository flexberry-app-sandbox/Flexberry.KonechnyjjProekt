package Konechnyjj_proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Konechnyjj_proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: СогласиеНаОпд
 */
@Entity(name = "IISKonechnyjj_proektСогласиеНаОпд")
@Table(schema = "public", name = "СогласиеНаОпд")
public class SoglasieNaOpd {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерДок")
    private Integer номердок;

    @Column(name = "Подписано")
    private Boolean подписано;

    @Column(name = "Отправлено")
    private Boolean отправлено;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;


    public SoglasieNaOpd() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерДок() {
      return номердок;
    }

    public void setНомерДок(Integer номердок) {
      this.номердок = номердок;
    }

    public Boolean getПодписано() {
      return подписано;
    }

    public void setПодписано(Boolean подписано) {
      this.подписано = подписано;
    }

    public Boolean getОтправлено() {
      return отправлено;
    }

    public void setОтправлено(Boolean отправлено) {
      this.отправлено = отправлено;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}