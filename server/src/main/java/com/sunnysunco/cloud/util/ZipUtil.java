package com.sunnysunco.cloud.util;

import com.sunnysunco.cloud.business.base.exception.BaseException;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.compress.archivers.zip.ZipArchiveEntry;
import org.apache.commons.compress.archivers.zip.ZipArchiveInputStream;
import org.apache.commons.compress.utils.CharsetNames;
import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;

@Component
@Slf4j
public class ZipUtil {
    public static void main(String[] args) {
        String zipFilePath = "x.zip";
        String destDirectory = "x";
        for (int i = 0; i < 10; i++) {
            unzip(zipFilePath, destDirectory);
        }
    }

    public static void unzip(String zipFilePath, String destDir) {
        // 判断destDir是否存在
        File destDirectory = new File(destDir);
        if (destDirectory.exists()) {
            destDirectory.delete();
        }
        // 判断zipFilePath是否存在
        File zipFile = new File(zipFilePath);
        if (!zipFile.exists()) {
            log.error("zip文件不存在");
            throw new BaseException("zip文件不存在");
        }
        long start = System.currentTimeMillis();
        try {
            // 获取zip文件的输入流
            InputStream inputStream = Files.newInputStream(Paths.get(zipFilePath));
            //todo 获取zip文件的字符编码
            String encoding = CharsetNames.UTF_8;
            // 创建zip输入流 用于读取zip文件
            ZipArchiveInputStream zipArchiveInputStream = new ZipArchiveInputStream(inputStream, encoding);
            // 获取zip文件中的每一个文件
            ZipArchiveEntry zipArchiveEntry;
            while ((zipArchiveEntry = zipArchiveInputStream.getNextEntry()) != null) {
                // 获取文件名
                if (zipArchiveEntry.isDirectory()) {
                    // 如果是文件夹，就创建文件夹
                    File directory = new File(destDir, zipArchiveEntry.getName());
                    directory.mkdirs();
                } else {
                    // 创建输出文件
                    File file = new File(destDir, zipArchiveEntry.getName());
                    // 创建文件输出流
                    OutputStream fos = Files.newOutputStream(file.toPath());
                    // 写入文件
                    IOUtils.copy(zipArchiveInputStream, fos);
                }
            }
            long end = System.currentTimeMillis();
            log.info("解压完成，耗时：" + (end - start) + "ms");
        } catch (IOException e) {
            log.error("unzip error", e);
        }
    }
}
