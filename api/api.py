"""
    各种算法，及其 api，可直接应用
"""

from sr_algorithm.sr_api import SrAlgorithmInitiator


def img_to_super_resolution_img(source_img_path, scale='2x'):
    """
    输入图片转为高分辨率图片
    :param source_img_path: 原图片，格式不限制
    :param scale: 提高精准度的规模，如果选择 2x，分辨率提高两倍
    :return: 新照片
    """
    if scale == '2x':
        sr_initiator = SrAlgorithmInitiator()
        pass
