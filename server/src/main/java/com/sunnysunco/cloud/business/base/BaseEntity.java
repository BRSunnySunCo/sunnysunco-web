package com.sunnysunco.cloud.business.base;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.sunnysunco.cloud.business.auth.role.RoleEntity;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Data()
@MappedSuperclass()
public abstract class BaseEntity implements Serializable {
    @Id
    @TableId(value = "id", type = IdType.ASSIGN_UUID)
    @Column(name = "id", nullable = false)
    private String id;

    @Schema(description = "类型")
    @Column(name = "type")
    @TableField("type")
    private String type;

    @Schema(description = "排序")
    @Column(name = "sort")
    @TableField("sort")
    private Integer sort;

    @Column(name = "create_time")
    @TableField(value = "create_time", fill = FieldFill.INSERT)
    @CreationTimestamp
    @Schema(description = "创建时间")
    private Date createTime;

    @Column(name = "update_time")
    @TableField(value = "update_time", fill = FieldFill.INSERT_UPDATE)
    @UpdateTimestamp
    @Schema(description = "更新时间")
    private Date updateTime;

//    @javax.persistence.Version
//    @com.baomidou.mybatisplus.annotation.Version
//    @Column(name = "version")
//    @TableField(value = "version")
//    @Schema(description = "版本号")
//    private Integer version;

    @Schema(description = "描述")
    @Column(name = "description")
    @TableField("description")
    private String description;

    @Schema(description = "可访问该行数据的角色")
    @TableField(exist = false)
    @ManyToMany()
    @JoinTable(name = "c_base_access_role",
            joinColumns = @JoinColumn(name = "base_id", foreignKey = @ForeignKey(name = "none")),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<RoleEntity> accessRole;
}
