package com.sunnysunco.cloud.business.information.image.dto;

import com.sunnysunco.cloud.business.base.dto.BaseCreateDto;
import com.sunnysunco.cloud.business.information.image.ImageEntity;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.validation.constraints.NotBlank;

@EqualsAndHashCode(callSuper = true)
@Data()
@Schema(description = "创建图片实体类")
public class CreateImageDto extends BaseCreateDto<ImageEntity> {
    @Schema(description = "图片名称")
    private String name;

    @NotBlank(message = "图片不能为空")
    @Schema(description = "图片文件id")
    private String fileId;

    @Override
    public ImageEntity toEntity() {
        ImageEntity imageEntity = new ImageEntity();
        imageEntity.setName(name);
        imageEntity.setFileId(fileId);
        return this.toEntity(imageEntity);
    }
}
