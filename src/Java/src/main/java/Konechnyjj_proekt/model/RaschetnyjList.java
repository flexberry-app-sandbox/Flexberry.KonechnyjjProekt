package Konechnyjj_proekt.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Konechnyjj_proekt.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: РасчетныйЛист
 */
@Entity(name = "IISKonechnyjj_proektРасчетныйЛист")
@Table(schema = "public", name = "РасчетныйЛист")
public class RaschetnyjList {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерДок")
    private Integer номердок;

    @Column(name = "ИтогоНачис")
    private Double итогоначис;

    @Column(name = "ИтогоУдер")
    private Double итогоудер;

    @Column(name = "ИтогоКПере")
    private Double итогокпере;

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

    @OneToMany(mappedBy = "raschetnyjlist", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavRascheta> sostavraschetas;


    public RaschetnyjList() {
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

    public Double getИтогоНачис() {
      return итогоначис;
    }

    public void setИтогоНачис(Double итогоначис) {
      this.итогоначис = итогоначис;
    }

    public Double getИтогоУдер() {
      return итогоудер;
    }

    public void setИтогоУдер(Double итогоудер) {
      this.итогоудер = итогоудер;
    }

    public Double getИтогоКПере() {
      return итогокпере;
    }

    public void setИтогоКПере(Double итогокпере) {
      this.итогокпере = итогокпере;
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