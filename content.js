window.ARTICLES=[
  {
    "id": "viadminshift",
    "title": "ViAdminShift: biết có thay đổi chưa đủ để AI bỏ câu trả lời cũ",
    "deck": "Nghiên cứu mới về tri thức có thời hạn, với bài học thực dụng cho doanh nghiệp và giáo dục. Đã đọc nguồn chính, chưa tái lập thực nghiệm.",
    "sourceDate": "Bản thảo arXiv ngày 02/11/2026",
    "body": [
      [
        "Bằng chứng và phạm vi",
        "ViAdminShift có 7.995 câu kiểm tra quanh cải cách hành chính 2025. Trong nhóm 20 mô hình vượt tiêu chí ‘biết cải cách’, 14 mô hình chỉ trả lời tên tỉnh mới trong tối đa 11% câu hỏi địa chỉ cũ không kèm gợi ý. Thêm ngày có thể cải thiện, nhưng không bảo đảm. Mã dùng MIT; dữ liệu và kết quả chủ yếu CC BY-SA 4.0, riêng đầu ra tiny-aya-global là CC BY-NC-SA 4.0. Đây là benchmark, không phải công cụ đổi địa chỉ. Giới hạn quan trọng: đáp án neo vào 01/07/2025, chưa phản ánh đầy đủ thay đổi năm 2026; nhiều thí nghiệm chỉ chạy một lần, một phần phân tích thực hiện hậu nghiệm. [Bản thảo ViAdminShift: phương pháp và giới hạn](https://arxiv.org/html/2611.03171v1)"
      ],
      [
        "Một lỗi âm thầm trong quy trình",
        "Điều đáng quan tâm với SME không phải cuộc đua điểm số, mà là cách một lỗi âm thầm đi qua quy trình. Một chatbot trả lời trôi chảy có thể khiến nhân viên tin rằng địa chỉ đã được chuẩn hóa. Nếu kết quả đó đi thẳng sang phần mềm giao hàng, thông tin sai sẽ được nhân bản qua nhiều hệ thống. Vì thế, đề xuất triển khai của bài viết này là tách hai việc: AI hiểu câu hỏi và bảng dữ liệu có phiên bản quyết định mã địa bàn. Câu trả lời nên kèm ngày hiệu lực, nguồn và cảnh báo khi có nhiều khả năng."
      ],
      [
        "Cách tự kiểm chứng",
        "Có thể tự kiểm chứng bằng một thử nghiệm nhỏ, chưa cần xây hệ thống lớn. Chọn các trường hợp doanh nghiệp thực sự gặp, gồm địa danh thay đổi, không thay đổi, tên trùng và câu không dấu. Nhờ người phụ trách nghiệp vụ lập đáp án từ nguồn hiện hành trước khi chạy AI. Với cùng từng câu, so sánh ba cách hỏi: không ghi ngày, ghi ngày trong chỉ dẫn chung, và ghi ngày trực tiếp trong câu hỏi. Không chỉ đếm đúng/sai; cần ghi riêng trường hợp trả lời cũ mà không cảnh báo, từ chối hợp lý và trường hợp bị yêu cầu cập nhật đến mức sửa cả dữ liệu vốn đúng."
      ],
      [
        "Chi phí và quyền riêng tư",
        "Đây là đề xuất thử nghiệm của người viết, không phải kết quả đã tái lập. Nên lưu phiên bản mô hình, thời điểm, cấu hình và toàn bộ đầu ra; chạy lặp vài lần để biết mức dao động. Chi phí cần đo bằng tiền API hoặc thời gian máy cộng thời gian chuyên viên sửa lỗi. Đừng đưa địa chỉ gắn với tên, số điện thoại khách hàng vào dịch vụ thử nghiệm nếu chưa có cơ sở cho phép; dữ liệu giả đủ để kiểm tra cấu trúc."
      ],
      [
        "Hướng nghiên cứu liên ngành",
        "Trong lớp học, chủ đề này phù hợp bài tập giao thoa tin học, địa lý và năng lực đọc nguồn: học sinh phải chỉ ra ‘đúng ở thời điểm nào’, thay vì chỉ hỏi AI có đúng không. Hướng nghiên cứu tiếp theo đáng làm là thiết kế giao diện biểu đạt thời gian, đo mức người dùng tin câu trả lời, và thử trên dữ liệu địa phương có lỗi chính tả. Mức tin cậy hiện tại đủ để đặt giả thuyết và thiết kế kiểm thử, chưa đủ để suy rộng tỷ lệ lỗi cho mọi chatbot."
      ]
    ],
    "sources": [
      [
        "Bài nghiên cứu đầy đủ, gồm phương pháp, giấy phép và giới hạn",
        "https://arxiv.org/html/2611.03171v1"
      ]
    ],
    "labels": [
      "Câu hỏi cũ",
      "Ngày hiệu lực",
      "Đối chiếu nguồn"
    ],
    "color": "blue",
    "category": "AI Việt Nam",
    "region": "Việt Nam",
    "kind": "Nghiên cứu ứng dụng",
    "date": "05/11/2026",
    "checked": "05/11/2026",
    "status": "Đã kiểm tra nguồn; chưa thực nghiệm",
    "read": "6 phút",
    "note": "Phân tích nguyên bản dựa trên nguồn trực tiếp được kiểm tra ngày 05/11/2026. Phương pháp và tình huống thử là đề xuất của ban biên tập, chưa thực hiện. Tuyên bố từ tác giả hoặc nhà cung cấp không phải xác nhận độc lập. Sơ đồ là minh họa nguyên bản, không phải ảnh sản phẩm hay kết quả đo.",
    "illustration": "images/viadminshift.svg",
    "illustrationCredit": "Đồ họa vector nguyên bản của Bản tin công nghệ. Không sử dụng ảnh hay biểu trưng của bên thứ ba.",
    "intro": "Nghiên cứu mới về tri thức có thời hạn, với bài học thực dụng cho doanh nghiệp và giáo dục. Đã đọc nguồn chính, chưa tái lập thực nghiệm."
  },
  {
    "id": "gipformer",
    "title": "Gipformer 1.5: thử nhận dạng tiếng Việt tại chỗ, nhưng đừng bỏ qua quyền dữ liệu",
    "deck": "Một phương án nhận dạng tiếng nói để khảo sát cho học liệu và SME. Đã đọc tài liệu kỹ thuật, chưa chạy mô hình hay xác nhận hiệu năng độc lập.",
    "sourceDate": "Chưa xác minh ngày phát hành; khảo sát công cụ ngày 05/11/2026",
    "body": [
      [
        "Số liệu do nhà phát triển công bố",
        "Gipformer 1.5 của G-Group AI Lab là mô hình nhận dạng tiếng nói 68 triệu tham số, giấy phép MIT. Model card tự báo cáo WER 23,32% trên bộ giáo dục và 27,49% trên bộ công nghệ. Đây là số liệu của nhà phát triển, chưa phải đánh giá độc lập; các tập tổng đài riêng cũng hạn chế khả năng tái lập. WER là tỷ lệ lỗi từ; cách chuẩn hóa số và dấu câu có thể làm điểm số khác trải nghiệm đọc bản chép. [Model card Gipformer 1.5](https://huggingface.co/g-group-ai-lab/gipformer1.5-68M-rnnt)"
      ],
      [
        "Giấy phép mô hình khác giấy phép dữ liệu",
        "Kho mã cung cấp suy luận ONNX, lựa chọn INT8 và nạp mô hình từ thư mục cục bộ. Bộ kiểm thử giáo dục gồm 495 đoạn, khoảng 0,52 giờ, mang giấy phép CC BY-NC 4.0. Bộ công nghệ gồm 508 đoạn, khoảng 0,49 giờ, cũng giới hạn sử dụng phi thương mại và yêu cầu ghi công. Không được suy từ MIT của mô hình rằng dữ liệu kiểm thử cũng được dùng thương mại. [Mã suy luận](https://github.com/ggroup-ai-lab/gipformer), [dữ liệu giáo dục](https://huggingface.co/datasets/g-group-ai-lab/vi-asr-edu-test), [dữ liệu công nghệ](https://huggingface.co/datasets/g-group-ai-lab/vi-asr-tech-test)"
      ],
      [
        "Một ứng dụng vừa sức",
        "Với một trung tâm đào tạo, trường hợp đáng thử là tạo bản chép nháp cho video hướng dẫn phần mềm có thuật ngữ tiếng Anh xen tiếng Việt. Với SME, đó có thể là hỗ trợ tìm kiếm trong kho ghi âm nội bộ đã được phép xử lý. Không nên bắt đầu bằng quyết định tự động dựa trên lời nói, vì một từ phủ định hoặc mã sản phẩm bị nghe sai có thể thay đổi hoàn toàn ý nghĩa."
      ],
      [
        "Cách đánh giá trên công việc thật",
        "Một phép thử thực dụng nên dùng bản ghi của chính đơn vị với sự đồng ý phù hợp, tách người nói giữa tập điều chỉnh và tập đánh giá. Có thể lấy cùng một đoạn âm thanh chạy qua Gipformer và hệ thống đang sử dụng, rồi nhờ hai người chép chuẩn độc lập. Ngoài WER, nên kiểm tra tỷ lệ đúng của thuật ngữ chuyên môn, số, tên riêng và câu phủ định. Với bài giảng lập trình, hãy đo xem người đọc bản chép có thực hiện đúng thao tác hay không: đúng nhiều từ nhưng sai tên hàm vẫn là thất bại về sử dụng."
      ],
      [
        "Chạy tại chỗ vẫn cần quản trị dữ liệu",
        "Chạy tại chỗ mở ra khả năng hạn chế truyền âm thanh ra ngoài, nhưng không tự tạo ra bảo mật. Người triển khai vẫn cần kiểm tra lưu log, quyền truy cập thư mục, bản sao lưu và thời hạn giữ bản ghi. Không nên tải âm thanh học sinh hoặc khách hàng lên demo công cộng chỉ để thử nhanh. Cũng chưa nên hứa ‘miễn phí’: cần tính máy tính, điện, tích hợp, vận hành và đặc biệt là phút biên tập cho mỗi giờ ghi âm."
      ],
      [
        "Hướng nghiên cứu liên ngành",
        "Một hướng liên ngành hữu ích là kết hợp kỹ thuật tiếng nói với ngôn ngữ học và thiết kế học liệu: đánh giá theo vùng giọng, mức nhiễu và cách đọc thuật ngữ, sau đó đo lợi ích thực sự cho người học. Các tập test ngắn là điểm khởi đầu, không thay thế được lớp học nhiều người nói hoặc cuộc gọi dài. Khuyến nghị hiện tại là thử nghiệm giới hạn, báo cáo cả lỗi lẫn chi phí sửa; chưa có bằng chứng ở đây để kết luận nên thay toàn bộ hệ thống đang dùng."
      ]
    ],
    "sources": [
      [
        "Model card: kiến trúc, số liệu tự báo cáo và giấy phép MIT",
        "https://huggingface.co/g-group-ai-lab/gipformer1.5-68M-rnnt"
      ],
      [
        "Kho mã và hướng dẫn suy luận chính thức",
        "https://github.com/ggroup-ai-lab/gipformer"
      ],
      [
        "Dataset giáo dục: quy mô và giấy phép CC BY-NC 4.0",
        "https://huggingface.co/datasets/g-group-ai-lab/vi-asr-edu-test"
      ],
      [
        "Dataset công nghệ: quy mô và giấy phép CC BY-NC 4.0",
        "https://huggingface.co/datasets/g-group-ai-lab/vi-asr-tech-test"
      ]
    ],
    "labels": [
      "Âm thanh",
      "Bản chép nháp",
      "Người kiểm tra"
    ],
    "color": "teal",
    "category": "AI Việt Nam",
    "region": "Việt Nam",
    "kind": "Nghiên cứu ứng dụng",
    "date": "05/11/2026",
    "checked": "05/11/2026",
    "status": "Đã kiểm tra nguồn; chưa thực nghiệm",
    "read": "6 phút",
    "note": "Phân tích nguyên bản dựa trên nguồn trực tiếp được kiểm tra ngày 05/11/2026. Phương pháp và tình huống thử là đề xuất của ban biên tập, chưa thực hiện. Tuyên bố từ tác giả hoặc nhà cung cấp không phải xác nhận độc lập. Sơ đồ là minh họa nguyên bản, không phải ảnh sản phẩm hay kết quả đo.",
    "illustration": "images/gipformer.svg",
    "illustrationCredit": "Đồ họa vector nguyên bản của Bản tin công nghệ. Không sử dụng ảnh hay biểu trưng của bên thứ ba.",
    "intro": "Một phương án nhận dạng tiếng nói để khảo sát cho học liệu và SME. Đã đọc tài liệu kỹ thuật, chưa chạy mô hình hay xác nhận hiệu năng độc lập."
  },
  {
    "id": "nemotron-personas-vietnam",
    "title": "Một triệu hồ sơ giả lập Việt: thêm tình huống thử AI, chưa thay được người dùng thật",
    "deck": "Nemotron-Personas-Vietnam 2.0 mở rộng dữ liệu giả lập. Giá trị nằm ở cách thiết kế bài thử, không chỉ ở số lượng hồ sơ.",
    "sourceDate": "15/10/2026: phát hành dữ liệu; 16/10/2026: FPT công bố mở rộng",
    "body": [
      [
        "Điều đã được xác nhận",
        "Dataset card NVIDIA ghi bản 2.0 phát hành ngày 15/10/2026, gồm một triệu bản ghi và sáu triệu mô tả persona. Dữ liệu chỉ bao gồm người trưởng thành, sử dụng tiếng Việt phổ thông; nhà phát triển thừa nhận giả định độc lập giữa một số biến nhân khẩu học. Sáu triệu mô tả không đồng nghĩa sáu triệu cá nhân. [Dataset card NVIDIA](https://huggingface.co/datasets/nvidia/Nemotron-Personas-Vietnam) Thông báo FPT ngày 16/10 xác nhận quy mô tăng mười lần và các hồ sơ được tạo tổng hợp dựa trên thống kê dân số, không phải thu thập từ một triệu người thật. [Thông báo FPT ngày 16/10/2026](https://fpt.com/en/news/fpt-and-nvidia-expand-synthetic-user-dataset-tenfold-to-advance-ai-development)"
      ],
      [
        "Phân tích: phong phú chưa chắc đại diện",
        "Giá trị thực dụng là mở rộng tình huống kiểm thử mà chưa phải mang dữ liệu khách hàng thật vào hệ thống. Tuy nhiên, khớp phân bố dân số không bảo đảm hành vi, nhu cầu và cách diễn đạt của nhóm nhỏ được mô phỏng đúng. Một hệ thống làm tốt với câu hỏi sinh bởi cùng họ mô hình vẫn có thể thất bại trước người dùng thật. Đây là công cụ tạo giả thuyết kiểm thử, không phải khảo sát thị trường hay bằng chứng độc lập về mức độ công bằng."
      ],
      [
        "Một thử nghiệm có thể bắt đầu nhỏ",
        "Đề xuất chọn quy trình ít rủi ro, như hướng dẫn tìm thông tin dịch vụ. Lấy mẫu theo tuổi, vùng và học vấn; yêu cầu các persona thực hiện cùng một nhiệm vụ. Giữ nguyên thông tin dịch vụ, chỉ thay cách diễn đạt và điều kiện sử dụng. Chấm riêng độ chính xác, mức dễ hiểu, khả năng hỏi lại và sự khác biệt giữa các nhóm. Điểm trung bình đẹp không được che lỗi nghiêm trọng ở nhóm ít mẫu."
      ],
      [
        "Từ câu hỏi sinh tự động đến kiểm chứng",
        "Chia tình huống thành ba lớp: câu hỏi rõ ràng, câu hỏi thiếu dữ kiện và câu hỏi có tiền đề sai. Người chấm cần biết đáp án chuẩn trước khi xem phản hồi AI. Sau vòng thử tổng hợp, dùng thêm bộ câu hỏi do người Việt thật viết, được phép sử dụng. Nếu kết quả tốt chỉ xuất hiện ở dữ liệu tổng hợp, chưa nên kết luận sản phẩm tiến bộ. Cũng cần giữ một bộ kiểm thử không dùng để tinh chỉnh, tránh việc cải thiện chỉ là học thuộc dạng câu hỏi."
      ],
      [
        "Chi phí và quyền sử dụng",
        "Dataset ghi giấy phép CC BY 4.0. Theo Creative Commons, được chia sẻ, chỉnh sửa và dùng thương mại nếu ghi công, dẫn giấy phép, nêu thay đổi và tuân thủ các điều kiện liên quan; giấy phép không bảo đảm mọi quyền khác đều được giải quyết. [Điều kiện CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) Miễn phí dữ liệu không đồng nghĩa miễn phí tính toán. Nên dự toán riêng tiền sinh câu hỏi, chạy mô hình, chấm bởi con người và lưu kết quả. Không cần dùng toàn bộ dữ liệu để biết thử nghiệm ban đầu có ích hay không."
      ],
      [
        "Điểm dừng và câu hỏi nghiên cứu",
        "Chưa có benchmark độc lập được thực hiện trong bài này. Hãy đặt tiêu chí dừng trước khi chạy: lỗi thông tin quan trọng, hướng dẫn gây hiểu nhầm hoặc chênh lệch lớn giữa các nhóm. Lưu phiên bản dữ liệu, mô hình và bộ câu hỏi để có thể lặp lại phép thử. Câu hỏi đáng nghiên cứu tiếp là: persona tổng hợp cải thiện kết quả trên người dùng thật bao nhiêu, và lợi ích còn giữ được khi đổi mô hình sinh câu hỏi?"
      ]
    ],
    "sources": [
      [
        "Dataset card NVIDIA",
        "https://huggingface.co/datasets/nvidia/Nemotron-Personas-Vietnam"
      ],
      [
        "Thông báo FPT ngày 16/10/2026",
        "https://fpt.com/en/news/fpt-and-nvidia-expand-synthetic-user-dataset-tenfold-to-advance-ai-development"
      ],
      [
        "Điều kiện CC BY 4.0",
        "https://creativecommons.org/licenses/by/4.0/"
      ]
    ],
    "labels": [
      "Hồ sơ giả lập",
      "Tình huống thử",
      "Người dùng thật"
    ],
    "color": "teal",
    "category": "AI Việt Nam",
    "region": "Việt Nam",
    "kind": "Nghiên cứu ứng dụng",
    "date": "05/11/2026",
    "checked": "05/11/2026",
    "status": "Đã kiểm tra nguồn; chưa thực nghiệm",
    "read": "6 phút",
    "note": "Phân tích nguyên bản dựa trên nguồn trực tiếp được kiểm tra ngày 05/11/2026. Phương pháp và tình huống thử là đề xuất của ban biên tập, chưa thực hiện. Tuyên bố từ tác giả hoặc nhà cung cấp không phải xác nhận độc lập. Sơ đồ là minh họa nguyên bản, không phải ảnh sản phẩm hay kết quả đo.",
    "illustration": "images/nemotron-personas-vietnam.svg",
    "illustrationCredit": "Đồ họa vector nguyên bản của Bản tin công nghệ. Không sử dụng ảnh hay biểu trưng của bên thứ ba.",
    "intro": "Nemotron-Personas-Vietnam 2.0 mở rộng dữ liệu giả lập. Giá trị nằm ở cách thiết kế bài thử, không chỉ ở số lượng hồ sơ."
  },
  {
    "id": "vnpt-qualcomm-edge-ai",
    "title": "VNPT–Qualcomm AI biên: đọc lộ trình bằng bài toán vận hành",
    "deck": "Hợp tác kỹ thuật mở thêm đường thương mại hóa. Doanh nghiệp vẫn cần kiểm chứng độ trễ, chi phí và đường đi của dữ liệu.",
    "sourceDate": "23/09/2026: công bố CESA; 30/09/2026: bài VNPT đăng",
    "body": [
      [
        "Điều đã được xác nhận",
        "Ngày 23/9/2026 tại New York, VNPT công bố mở rộng hợp tác với Qualcomm qua thỏa thuận dịch vụ kỹ thuật khách hàng CESA. Danh mục được nêu gồm AI Gateway, camera AI, laptop AI và kết nối XGS-PON/Wi-Fi. Con số đầu tư và cơ hội kinh doanh trong thông cáo là dự kiến, không phải doanh thu đã ghi nhận. [VNPT công bố mở rộng hợp tác CESA](https://vinaphonehanoi.vnpt.vn/tin-tuc-chi-tiet/vnpt-hop-tac-qualcomm-phat-trien-loat-san-pham-ai-the-he-moi-huong-toi-thi-truong-toan-cau-1316) Bài VNPT Technology đăng 10/9, tường thuật buổi làm việc 27/8, nói các nhóm sản phẩm dự kiến được giới thiệu và thương mại hóa đến tháng 6/2027. [VNPT Technology về lộ trình thương mại hóa](https://vnpt-technology.vn/vi/news_detail/vnpt-qualcomm-tang-toc-hop-tac-mo-rong-he-sinh-thai-ai-va-huong-toi-6g)"
      ],
      [
        "Phân tích: cần nhìn cả vòng đời",
        "Điểm đáng theo dõi không chỉ là chạy AI gần thiết bị hơn, mà còn là năng lực thiết kế, tích hợp, hỗ trợ và bảo trì hệ thống trong nước. Với nhà máy hay chuỗi cửa hàng, triển khai tại chỗ có thể quan trọng ngang tốc độ suy luận. Nhưng thông cáo hợp tác chưa chứng minh độ trễ, điện năng, độ ổn định hoặc tổng chi phí sở hữu. Lộ trình ra thị trường không đồng nghĩa mọi sản phẩm đã bán và sẵn sàng cho mọi quy mô."
      ],
      [
        "Cách thử trước khi mua lớn",
        "Đề xuất chọn một tác vụ ít rủi ro và dữ liệu không nhạy cảm, rồi chạy cùng tác vụ ở biên và trên đám mây. Đo độ trễ ở phần trăm vị 95, tỷ lệ sai, điện năng, lưu lượng mạng và khả năng hoạt động khi mất kết nối. Phải giữ điều kiện đầu vào tương đương. Không nên duyệt mua sắm chỉ dựa trên tốc độ chip hoặc nhãn AI: một thiết bị nhanh nhưng cần nhiều thao tác sửa lỗi vẫn có thể làm quy trình chậm hơn."
      ],
      [
        "Một kịch bản vận hành đáng kiểm tra",
        "Trong thử nghiệm giả định tại cửa hàng, cho hệ thống xử lý dữ liệu mẫu ở giờ bình thường và lúc tải tăng. Sau đó ngắt mạng có kiểm soát trong môi trường thử nghiệm để xem chức năng nào còn chạy, dữ liệu nào được đệm và có bị gửi trùng khi kết nối trở lại không. Đây là đề xuất phương pháp, không phải kết quả đã đo trên thiết bị VNPT. Cần thử cả cập nhật mô hình, quay lại phiên bản cũ và thời gian khôi phục khi thiết bị gặp lỗi."
      ],
      [
        "Giá và dữ liệu còn cần hỏi rõ",
        "Hai nguồn đã đọc chưa cung cấp giá bán, báo giá triển khai, điều khoản lưu dữ liệu hoặc benchmark độc lập. Không thể suy ra dữ liệu không rời thiết bị: mô tả hợp tác có cả thành phần đám mây. Trước khi dùng camera hoặc tài liệu nội bộ, cần yêu cầu sơ đồ luồng dữ liệu, nơi lưu log và quyền truy cập từ xa. Hợp đồng cũng nên làm rõ thời hạn hỗ trợ firmware, trách nhiệm vá lỗi và cách xuất dữ liệu khi đổi nhà cung cấp."
      ],
      [
        "Quyết định bằng chi phí ba năm",
        "Dự toán nên tách thiết bị, tích hợp, điện, đường truyền, bảo trì, cập nhật mô hình và nhân lực xử lý sự cố. So sánh ở cùng mức chất lượng đầu ra, thay vì coi mọi lượt suy luận là tương đương. Chỉ mở rộng sau khi thử nghiệm đạt ngưỡng đã thống nhất. Câu hỏi nghiên cứu sâu là: tiết kiệm băng thông và độ trễ trong tải thực tế tại Việt Nam có bù được chi phí thiết bị và vận hành trong ba năm không?"
      ]
    ],
    "sources": [
      [
        "VNPT công bố mở rộng hợp tác CESA",
        "https://vinaphonehanoi.vnpt.vn/tin-tuc-chi-tiet/vnpt-hop-tac-qualcomm-phat-trien-loat-san-pham-ai-the-he-moi-huong-toi-thi-truong-toan-cau-1316"
      ],
      [
        "VNPT Technology về lộ trình thương mại hóa",
        "https://vnpt-technology.vn/vi/news_detail/vnpt-qualcomm-tang-toc-hop-tac-mo-rong-he-sinh-thai-ai-va-huong-toi-6g"
      ]
    ],
    "labels": [
      "Thiết bị biên",
      "Mạng & dữ liệu",
      "Chi phí vận hành"
    ],
    "color": "blue",
    "category": "AI Việt Nam",
    "region": "Việt Nam",
    "kind": "Nghiên cứu ứng dụng",
    "date": "05/11/2026",
    "checked": "05/11/2026",
    "status": "Đã kiểm tra nguồn; chưa thực nghiệm",
    "read": "6 phút",
    "note": "Phân tích nguyên bản dựa trên nguồn trực tiếp được kiểm tra ngày 05/11/2026. Phương pháp và tình huống thử là đề xuất của ban biên tập, chưa thực hiện. Tuyên bố từ tác giả hoặc nhà cung cấp không phải xác nhận độc lập. Sơ đồ là minh họa nguyên bản, không phải ảnh sản phẩm hay kết quả đo.",
    "illustration": "images/vnpt-qualcomm-edge-ai.svg",
    "illustrationCredit": "Đồ họa vector nguyên bản của Bản tin công nghệ. Không sử dụng ảnh hay biểu trưng của bên thứ ba.",
    "intro": "Hợp tác kỹ thuật mở thêm đường thương mại hóa. Doanh nghiệp vẫn cần kiểm chứng độ trễ, chi phí và đường đi của dữ liệu."
  },
  {
    "id": "ai-phap-luat-viet-nam",
    "title": "AI pháp luật: câu trả lời chỉ là điểm bắt đầu của việc kiểm chứng",
    "deck": "Từ tra cứu cho người dân đến rà soát văn bản, giá trị của AI phụ thuộc vào căn cứ, hiệu lực và người chịu trách nhiệm cuối cùng.",
    "sourceDate": "22/08/2026: trường hợp Hà Tĩnh; 07/09/2026: bài về Cổng Pháp luật quốc gia",
    "body": [
      [
        "Bối cảnh đã được xác nhận",
        "Bộ KH&CN ngày 7/9/2026 mô tả AI trên Cổng Pháp luật quốc gia giúp tìm kiếm, tổng hợp thông tin bằng câu hỏi tự nhiên, đồng thời yêu cầu kiểm tra căn cứ. [Bộ KH&CN: tiếp cận pháp luật với AI](https://mst.gov.vn/tu-ngai-doc-luat-den-chu-dong-tim-hieu-phap-luat-voi-ai-197260904230214347.htm) Đây là mô tả ứng dụng, không phải công bố tỷ lệ trả lời đúng. Bài ngày 22/8 về Hà Tĩnh nêu yêu cầu kết quả AI phải truy xuất được, được cán bộ kiểm tra và xác nhận; tài liệu bí mật nhà nước không được đưa lên AI công cộng. [Bộ KH&CN: Hà Tĩnh triển khai AI rà soát văn bản](https://mst.gov.vn/ha-tinh-trien-khai-nen-tang-ai-ho-tro-ra-soat-van-ban-quy-pham-phap-luat-197260822141703003.htm)"
      ],
      [
        "Hai bài toán có tiêu chuẩn khác nhau",
        "Hỏi đáp cho người dân cần ngôn ngữ dễ hiểu và dẫn đúng văn bản. Rà soát quy định cần phát hiện quan hệ sửa đổi, thay thế, thẩm quyền và thời điểm hiệu lực. Câu trả lời trôi chảy có thể hữu ích để định hướng nhưng vẫn gây hại nếu bỏ sót văn bản mới hoặc áp dụng nhầm thời kỳ. Vì vậy, không nên đánh giá cả hai bài toán bằng một điểm chất lượng chung, càng không nên dùng số lượt hỏi đáp làm thước đo độ chính xác."
      ],
      [
        "Quy trình tra cứu an toàn hơn",
        "Đề xuất bắt đầu bằng câu hỏi đã bỏ thông tin định danh, nêu rõ thời điểm và địa bàn. Yêu cầu AI trả số văn bản, điều khoản, tình trạng hiệu lực và dữ kiện còn thiếu. Sau đó mở văn bản gốc để kiểm tra từng kết luận. Nếu câu trả lời chỉ dẫn tên luật mà không chỉ rõ căn cứ phù hợp, cần tiếp tục tra cứu. Không xem việc có đường dẫn là bảo đảm: đường dẫn có thể đúng nhưng nội dung không hỗ trợ kết luận."
      ],
      [
        "Tình huống kiểm thử cho nhóm pháp chế",
        "Xây một bộ câu hỏi có đáp án do chuyên gia xác nhận. Đưa vào các tình huống giả định nằm trước và sau ngày quy định thay đổi, câu hỏi thiếu dữ kiện và trường hợp có ngoại lệ. Chấm riêng lỗi trích dẫn, lỗi hiệu lực, bỏ sót ngoại lệ và khả năng nhận ra chưa đủ thông tin. Giữ lại câu trả lời sai để tái kiểm thử sau mỗi cập nhật. Một hệ thống biết hỏi lại đúng lúc có thể hữu ích hơn hệ thống luôn trả lời dứt khoát."
      ],
      [
        "Quyền dữ liệu và giá chưa được xác minh",
        "Chưa xác minh được giá, hạn mức, chính sách lưu câu hỏi hoặc quyền dùng lại dữ liệu của từng nền tảng. Không nên đồng nhất việc xuất hiện trên cổng nhà nước với mọi công cụ tích hợp đều miễn phí và không lưu dữ liệu. Với hợp đồng, tranh chấp hoặc quyết định ảnh hưởng quyền lợi, cần chuyên gia chịu trách nhiệm cuối cùng. Trước khi nhập tài liệu, phải xác định tài liệu được phép chia sẻ với nhà cung cấp nào và cho mục đích gì."
      ],
      [
        "Dùng như trợ lý, giữ đường kiểm toán",
        "Một quy trình tốt lưu câu hỏi, thời điểm tra cứu, nguồn chính thức và người kiểm tra, thay vì chỉ sao chép đoạn kết luận. Khi nguồn thay đổi, nhóm có thể xác định kết luận nào cần xem lại. Bài này không thử trực tiếp sản phẩm và không đánh giá nền tảng nào chính xác nhất; đây là phân tích ứng dụng, không phải tin ra mắt mới. Câu hỏi nghiên cứu tiếp: hệ thống nhận ra văn bản hết hiệu lực và điều khoản chuyển tiếp tốt đến đâu khi luật thay đổi nhanh?"
      ]
    ],
    "sources": [
      [
        "Bộ KH&CN: tiếp cận pháp luật với AI",
        "https://mst.gov.vn/tu-ngai-doc-luat-den-chu-dong-tim-hieu-phap-luat-voi-ai-197260904230214347.htm"
      ],
      [
        "Bộ KH&CN: Hà Tĩnh triển khai AI rà soát văn bản",
        "https://mst.gov.vn/ha-tinh-trien-khai-nen-tang-ai-ho-tro-ra-soat-van-ban-quy-pham-phap-luat-197260822141703003.htm"
      ]
    ],
    "labels": [
      "Câu hỏi",
      "Văn bản gốc",
      "Người xác nhận"
    ],
    "color": "orange",
    "category": "AI Việt Nam",
    "region": "Việt Nam",
    "kind": "Nghiên cứu ứng dụng",
    "date": "05/11/2026",
    "checked": "05/11/2026",
    "status": "Đã kiểm tra nguồn; chưa thực nghiệm",
    "read": "6 phút",
    "note": "Phân tích nguyên bản dựa trên nguồn trực tiếp được kiểm tra ngày 05/11/2026. Phương pháp và tình huống thử là đề xuất của ban biên tập, chưa thực hiện. Tuyên bố từ tác giả hoặc nhà cung cấp không phải xác nhận độc lập. Sơ đồ là minh họa nguyên bản, không phải ảnh sản phẩm hay kết quả đo.",
    "illustration": "images/ai-phap-luat-viet-nam.svg",
    "illustrationCredit": "Đồ họa vector nguyên bản của Bản tin công nghệ. Không sử dụng ảnh hay biểu trưng của bên thứ ba.",
    "intro": "Từ tra cứu cho người dân đến rà soát văn bản, giá trị của AI phụ thuộc vào căn cứ, hiệu lực và người chịu trách nhiệm cuối cùng."
  },
  {
    "id": "vbench-chon-ai-tieng-viet",
    "title": "AI giỏi tiếng Việt đến đâu? Đừng chọn chỉ bằng một điểm số",
    "deck": "Từ V-Bench đến một bộ kiểm tra nhỏ do chính người dùng thiết kế cho công việc của mình.",
    "category": "AI Việt Nam",
    "region": "Việt Nam",
    "kind": "Nghiên cứu ứng dụng",
    "date": "04/11/2026",
    "sourceDate": "06/07/2026",
    "checked": "04/11/2026",
    "status": "Biên tập hoàn chỉnh, chưa thử nghiệm thực tế",
    "body": [
      [
        "Một câu trả lời trôi chảy vẫn có thể hiểu sai việc",
        "Một trợ lý có thể viết rất tự nhiên nhưng bỏ sót ý phủ định, hiểu nhầm cách xưng hô hoặc làm sai một bước trong yêu cầu. Với người đang chọn AI để hỗ trợ học tập hay xử lý văn bản, điều cần biết là mô hình có làm đúng loại việc của mình hay không. Bảng xếp hạng là điểm khởi đầu; quyết định sử dụng cần thêm một phép thử sát thực tế."
      ],
      [
        "V-Bench đặt thêm những câu hỏi về tiếng Việt",
        "Thông báo ngày 06/07/2026 của VinUni mô tả V-Bench gồm hơn 40.000 câu hỏi và tác vụ, xét cả sắc thái văn hóa, khác biệt vùng miền, an toàn và năng lực thực hiện công việc. Đây là thông tin từ đơn vị phát triển, chưa phải kiểm chứng độc lập của bài viết. Trang vbench.ai có thể truy cập, nhưng công cụ đọc trong lần kiểm tra này không lấy được bảng điểm hiện hành; vì vậy bài không nêu mô hình đang đứng đầu. [VinUni giới thiệu V-Bench](https://vinuni.edu.vn/vi/vinuni-ra-mat-v-bench-thuoc-do-nang-luc-cua-cac-mo-hinh-ai-danh-cho-nguoi-viet/), [Trang V-Bench](https://vbench.ai/)"
      ],
      [
        "Làm một bộ kiểm tra vừa đủ dùng",
        "Đề xuất thực hành của ban biên tập, chưa phải thí nghiệm đã chạy: chọn 20 tình huống do mình viết, chia đều thành trích thông tin, tóm tắt, hiểu chỉ dẫn nhiều bước và xử lý thiếu dữ kiện. Soạn đáp án trước khi hỏi AI. Dùng cùng đầu vào cho hai mô hình, ghi phiên bản, ngày thử, công cụ bật thêm và số lần chạy. Tránh đưa câu trả lời đúng vào lời nhắc. Với mỗi lỗi, ghi cụ thể sai ở đâu thay vì chỉ chấm “hay” hay “dở”."
      ],
      [
        "Đừng để một con số che mất loại lỗi",
        "Tạo bốn cột: đúng thông tin; đủ yêu cầu; biết nói thiếu dữ liệu; thời gian sửa lại bằng tay. Một câu văn đẹp nhưng tự thêm sự kiện phải bị ghi lỗi. Có thể thử lại một số câu để xem kết quả có ổn định, nhưng không chọn riêng lần trả lời đẹp nhất. Mẫu 20 tình huống chỉ giúp sàng lọc ban đầu, không đủ chứng minh mô hình an toàn trên mọi việc. Nếu dùng để ra quyết định quan trọng, cần mở rộng mẫu và có người có chuyên môn kiểm tra."
      ],
      [
        "Một lời nhắc để bắt đầu",
        "Ví dụ minh họa: “Chỉ dùng đoạn thông báo dưới đây. Lập danh sách người phụ trách, việc cần làm và thời điểm. Nếu thiếu thông tin, ghi chưa nêu. Sau mỗi mục chỉ rõ câu làm căn cứ. Không tự suy ra hạn chót.” Dùng một thông báo giả với một nhiệm vụ chưa có người phụ trách. Kiểm tra AI có tự điền tên hay giữ đúng khoảng trống."
      ],
      [
        "Chi phí nằm cả ở khâu chấm",
        "Có thể làm vòng sàng lọc bằng công cụ đang được phép sử dụng; bài không yêu cầu mua gói hay gọi API. Chi phí thực gồm thời gian tạo đáp án, chấm và sửa lỗi. Không đưa dữ liệu cá nhân vào bộ thử công khai. Kiểm tra điều khoản lưu dữ liệu của từng dịch vụ trước khi dùng tài liệu thật. Hướng nghiên cứu tiếp theo là so sánh lỗi theo phương ngữ, độ dài tài liệu và cách viết không dấu, rồi tìm xem cải thiện lời nhắc có thật sự chuyển sang một tập câu hỏi mới hay chỉ giúp tập cũ."
      ]
    ],
    "sources": [
      [
        "VinUni giới thiệu V-Bench",
        "https://vinuni.edu.vn/vi/vinuni-ra-mat-v-bench-thuoc-do-nang-luc-cua-cac-mo-hinh-ai-danh-cho-nguoi-viet/"
      ],
      [
        "Trang V-Bench",
        "https://vbench.ai/"
      ]
    ],
    "illustration": "illustrations/vbench-chon-ai-tieng-viet.svg",
    "illustrationCredit": "Sơ đồ biên tập nguyên bản của dot, không phải ảnh sản phẩm hay kết quả đo.",
    "labels": [
      "Bộ thử",
      "Chấm lỗi",
      "Chọn công cụ"
    ],
    "color": "teal",
    "art": "VN1",
    "read": "6 phút",
    "intro": "Một trợ lý có thể viết rất tự nhiên nhưng bỏ sót ý phủ định, hiểu nhầm cách xưng hô hoặc làm sai một bước trong yêu cầu. Với người đang chọn AI để hỗ trợ học tập hay xử lý văn bản, điều cần biết là mô hình có làm đúng loại việc của mình hay không. Bảng xếp hạng là điểm khởi đầu; quyết định sử dụng cần thêm một phép thử sát thực tế.",
    "note": "Biên tập hoàn chỉnh, chưa thử nghiệm thực tế. Minh họa là sơ đồ nguyên bản của ban biên tập; các phương pháp thử được nêu là đề xuất, không phải kết quả đã thực hiện."
  },
  {
    "id": "fpt-copilot-do-hieu-qua",
    "title": "FPT dùng Copilot: điều đáng học là cách đo, không phải con số tăng trưởng",
    "deck": "Một trường hợp triển khai tại Việt Nam gợi ý cách thử AI có đối chứng trong đội ngũ nhỏ.",
    "category": "AI Việt Nam",
    "region": "Việt Nam",
    "kind": "Nghiên cứu ứng dụng",
    "date": "04/11/2026",
    "sourceDate": "02/07/2025",
    "checked": "04/11/2026",
    "status": "Biên tập hoàn chỉnh, chưa thử nghiệm thực tế",
    "body": [
      [
        "Mua công cụ chưa phải là cải tiến quy trình",
        "Một đội marketing dễ nhìn vào tốc độ viết nội dung rồi kết luận AI làm việc hiệu quả. Nhưng nếu bản thảo nhanh hơn mà người kiểm duyệt phải sửa lâu hơn, phần thời gian tiết kiệm có thể đã chuyển sang người khác. Bài toán đáng nghiên cứu là cả quy trình có tạo ra kết quả tốt hơn với tổng công sức thấp hơn hay không."
      ],
      [
        "Đọc trường hợp FPT với đúng mức tin cậy",
        "Trong câu chuyện khách hàng do Microsoft công bố ngày 02/07/2025, FPT Software mô tả triển khai Copilot ban đầu cho khoảng 500 nhân sự vận hành và dùng nó trong marketing. Đơn vị cho biết các khu vực website được chỉnh sửa tăng tương tác tám lần, đồng thời tỷ lệ chuyển đổi khách hàng tiềm năng tăng 3,5 lần. Đây là số liệu được khách hàng và nhà cung cấp công bố, không phải thí nghiệm độc lập của bài viết. Nguồn không đủ để tách riêng ảnh hưởng của AI khỏi nội dung, thiết kế và các thay đổi khác. [Microsoft Customer Story: FPT Software](https://www.microsoft.com/vi-vn/customers/story/24272-fpt-software-microsoft-365-copilot)"
      ],
      [
        "Thử ở một khâu, giữ các khâu còn lại ổn định",
        "Đề xuất thử nghiệm: chọn một việc như chuẩn bị bản tóm tắt nghiên cứu công khai trước cuộc họp. Lấy những nhiệm vụ có độ khó gần nhau, chia lượt làm theo cách cũ và có AI hỗ trợ. Giữ nguyên tiêu chí đầu ra và người duyệt. Ghi tổng thời gian từ bắt đầu đến bản được chấp nhận, số lỗi nguồn, số lần sửa. Không dùng dữ liệu khách hàng hoặc hồ sơ nhân sự thật cho lần tập đầu. Đây là thiết kế thử nghiệm gợi ý, chưa được thực hiện bởi ban biên tập."
      ],
      [
        "Chấm kín sẽ công bằng hơn lời khen",
        "Người duyệt nên nhận hai bản không ghi nhãn có AI hay không. Dùng thang chấm có ví dụ: một thông tin thiếu nguồn bị trừ thế nào; một nhận định vượt quá bằng chứng có được chấp nhận không. Khi xem kết quả, báo cả trung vị thời gian và các trường hợp thất bại. Đừng chỉ so số lần mở ứng dụng. Với mẫu nhỏ, kết luận phù hợp là nên thử tiếp ở đâu, chưa phải mức tăng năng suất của cả doanh nghiệp."
      ],
      [
        "Quyền truy cập cũng là một phần bài thử",
        "Tài liệu Microsoft cho biết Copilot chỉ đưa ra dữ liệu tổ chức mà người dùng có quyền xem và không dùng prompt, phản hồi, dữ liệu Microsoft Graph để huấn luyện mô hình nền tảng. Điều đó khiến việc rà soát quyền sẵn có quan trọng: AI không sửa giúp một thư mục đã chia sẻ quá rộng. Các agent và tìm kiếm web có luồng xử lý riêng cần đọc thêm. [Dữ liệu và quyền riêng tư Copilot](https://learn.microsoft.com/en-us/copilot/plan/microsoft-365-copilot-privacy)"
      ],
      [
        "Tính chi phí trước khi mở rộng",
        "Trang giá Microsoft hiện phân loại theo gói, chu kỳ thanh toán và có tính phí theo sử dụng cho một số tính năng nâng cao. Bài không áp một mức USD thành giá bán tại Việt Nam. Khi dự toán, cộng giấy phép, thời gian học, kiểm duyệt và quản trị dữ liệu; kiểm tra báo giá đúng tài khoản trước mua. [Giá Copilot cho doanh nghiệp](https://www.microsoft.com/en-us/copilot/pricing/business) Hướng nghiên cứu tiếp theo là theo dõi chất lượng sau vài tuần, khi hiệu ứng mới lạ giảm, và xem người ít kinh nghiệm có tiến bộ hay phụ thuộc vào câu trả lời sẵn."
      ]
    ],
    "sources": [
      [
        "Microsoft Customer Story: FPT Software",
        "https://www.microsoft.com/vi-vn/customers/story/24272-fpt-software-microsoft-365-copilot"
      ],
      [
        "Dữ liệu và quyền riêng tư Copilot",
        "https://learn.microsoft.com/en-us/copilot/plan/microsoft-365-copilot-privacy"
      ],
      [
        "Giá Copilot cho doanh nghiệp",
        "https://www.microsoft.com/en-us/copilot/pricing/business"
      ]
    ],
    "illustration": "illustrations/fpt-copilot-do-hieu-qua.svg",
    "illustrationCredit": "Sơ đồ biên tập nguyên bản của dot, không phải ảnh sản phẩm hay kết quả đo.",
    "labels": [
      "Quy trình cũ",
      "Thử có AI",
      "Đo toàn bộ"
    ],
    "color": "orange",
    "art": "VN2",
    "read": "6 phút",
    "intro": "Một đội marketing dễ nhìn vào tốc độ viết nội dung rồi kết luận AI làm việc hiệu quả. Nhưng nếu bản thảo nhanh hơn mà người kiểm duyệt phải sửa lâu hơn, phần thời gian tiết kiệm có thể đã chuyển sang người khác. Bài toán đáng nghiên cứu là cả quy trình có tạo ra kết quả tốt hơn với tổng công sức thấp hơn hay không.",
    "note": "Biên tập hoàn chỉnh, chưa thử nghiệm thực tế. Minh họa là sơ đồ nguyên bản của ban biên tập; các phương pháp thử được nêu là đề xuất, không phải kết quả đã thực hiện."
  },
  {
    "id": "vietjobs-doc-nhu-cau-ky-nang",
    "title": "Đọc nhu cầu kỹ năng từ tin tuyển dụng với VietJobs",
    "deck": "Một bộ dữ liệu tiếng Việt cho phép học cách trích thông tin, nhưng không đại diện cho toàn bộ thị trường việc làm.",
    "category": "AI Việt Nam",
    "region": "Việt Nam",
    "kind": "Nghiên cứu ứng dụng",
    "date": "04/11/2026",
    "sourceDate": "05/03/2026",
    "checked": "04/11/2026",
    "status": "Biên tập hoàn chỉnh, chưa thử nghiệm thực tế",
    "body": [
      [
        "Tin tuyển dụng có ích nếu đọc đúng câu hỏi",
        "Người thiết kế khóa học thường muốn biết nên dạy kỹ năng nào. Đếm một từ xuất hiện nhiều chưa đủ: “biết Excel” có thể là điều kiện tối thiểu, còn “xây báo cáo bằng Excel” là một nhiệm vụ cụ thể. AI có thể giúp chuyển văn bản thành cấu trúc để kiểm tra, thay vì biến danh sách từ phổ biến thành lời khẳng định về nhu cầu thị trường."
      ],
      [
        "VietJobs cung cấp những gì?",
        "Bài nghiên cứu VietJobs công bố trên arXiv ngày 05/03/2026 giới thiệu 48.092 tin tuyển dụng và hai bài toán thử nghiệm là phân loại nghề, ước lượng lương. Kho mã của tác giả ghi giai đoạn dữ liệu tháng 7–10/2025, có mã đánh giá và tinh chỉnh, đồng thời dẫn đến dữ liệu trên Hugging Face. Đây là nguồn nghiên cứu và mã từ tác giả; bài này chưa chạy lại kết quả. Mốc thu thập có nghĩa bộ dữ liệu không phải bảng nhu cầu tuyển dụng trực tiếp của hôm nay. [VietJobs trên arXiv](https://arxiv.org/abs/2603.05262), [Mã và mô tả dữ liệu từ tác giả](https://github.com/VinNLP/VietJobs)"
      ],
      [
        "Bắt đầu bằng trích kỹ năng, chưa cần huấn luyện",
        "Bài thực hành đề xuất: chọn một mẫu nhỏ đã kiểm tra quyền sử dụng, chỉ giữ mô tả nghề và yêu cầu kỹ năng. Tạo các cột: kỹ năng được nhắc; mức bắt buộc hay ưu tiên; câu chứng minh; điều chưa rõ. Gắn nhãn bằng tay trước cho một phần mẫu để làm đáp án. Sau đó yêu cầu AI xử lý đúng các trường ấy. Không cần chạy ngay toàn bộ mã tinh chỉnh trong repository; người mới có thể học nguyên tắc bằng vài mô tả công việc tự viết."
      ],
      [
        "Phải giữ được câu làm căn cứ",
        "Lời nhắc minh họa: “Trích các kỹ năng được nêu rõ. Với mỗi kỹ năng, chép đoạn ngắn làm căn cứ, ghi bắt buộc/ưu tiên/chưa rõ. Không suy ra kỹ năng từ tên nghề. Không ước lượng lương và không đánh giá ứng viên.” Tình huống kiểm tra: một tin chỉ nói phối hợp với nhóm dữ liệu. Nếu AI tự thêm Python như yêu cầu bắt buộc, đó là lỗi suy diễn. Đếm cả kỹ năng bị bỏ sót và kỹ năng AI tự thêm; tỷ lệ đúng cao không có ý nghĩa nếu mô hình chỉ chọn những câu dễ."
      ],
      [
        "Dữ liệu quảng cáo không phải mức lương thực nhận",
        "Tin đăng có thể lặp, ghi mức thu nhập gồm thưởng hoặc bỏ trống lương. Khi dùng để thiết kế giáo trình, cần tách ngành, địa phương và khoảng thời gian; kiểm tra một mẫu thủ công trước khi tính tỷ lệ. Không dùng kết quả ước lượng để quyết định tuyển ai hoặc trả lương cho một cá nhân. Repository hiển thị MIT, nhưng quyền của mã không tự thay thế việc đọc điều kiện của dữ liệu tải xuống và nền tảng nguồn. [Mã và mô tả dữ liệu từ tác giả](https://github.com/VinNLP/VietJobs)"
      ],
      [
        "Một bài học nối sang nghiên cứu giáo dục",
        "Có thể so yêu cầu trong tin đăng với chuẩn đầu ra của khóa học, rồi phỏng vấn một nhóm doanh nghiệp để kiểm tra khoảng thiếu. Đây là hướng nghiên cứu tiếp, chưa phải kết luận VietJobs đã xác nhận. Chi phí gồm lấy mẫu, gắn nhãn và chạy mô hình; dùng dữ liệu giả sẽ tránh phát sinh chia sẻ thông tin cá nhân trong buổi học. Muốn mở rộng, cần công bố cách chọn mẫu, xử lý trùng và mức lỗi của bộ trích thông tin."
      ]
    ],
    "sources": [
      [
        "VietJobs trên arXiv",
        "https://arxiv.org/abs/2603.05262"
      ],
      [
        "Mã và mô tả dữ liệu từ tác giả",
        "https://github.com/VinNLP/VietJobs"
      ]
    ],
    "illustration": "illustrations/vietjobs-doc-nhu-cau-ky-nang.svg",
    "illustrationCredit": "Sơ đồ biên tập nguyên bản của dot, không phải ảnh sản phẩm hay kết quả đo.",
    "labels": [
      "Tin tuyển dụng",
      "Kỹ năng + căn cứ",
      "Kiểm tra mẫu"
    ],
    "color": "blue",
    "art": "VN3",
    "read": "6 phút",
    "intro": "Người thiết kế khóa học thường muốn biết nên dạy kỹ năng nào. Đếm một từ xuất hiện nhiều chưa đủ: “biết Excel” có thể là điều kiện tối thiểu, còn “xây báo cáo bằng Excel” là một nhiệm vụ cụ thể. AI có thể giúp chuyển văn bản thành cấu trúc để kiểm tra, thay vì biến danh sách từ phổ biến thành lời khẳng định về nhu cầu thị trường.",
    "note": "Biên tập hoàn chỉnh, chưa thử nghiệm thực tế. Minh họa là sơ đồ nguyên bản của ban biên tập; các phương pháp thử được nêu là đề xuất, không phải kết quả đã thực hiện."
  },
  {
    "id": "vn1k-rice-du-lieu-truoc-ai",
    "title": "Muốn AI giúp chọn giống lúa, phải biết dữ liệu đang đại diện cho điều gì",
    "deck": "VN1K-RICE gợi mở bài học về hạ tầng dữ liệu và kiểm chứng ngoài thực địa.",
    "category": "AI Việt Nam",
    "region": "Việt Nam",
    "kind": "Nghiên cứu ứng dụng",
    "date": "04/11/2026",
    "sourceDate": "Sự kiện 30/10/2026; bài công bố 03/11/2026",
    "checked": "04/11/2026",
    "status": "Biên tập hoàn chỉnh, chưa thử nghiệm thực tế",
    "body": [
      [
        "Một dự báo đẹp chưa phải một giống tốt",
        "Khi nói AI trong nông nghiệp, hình dung thường là chụp ảnh rồi nhận lời khuyên. Ở nghiên cứu chọn giống, câu hỏi sâu hơn nằm ở quan hệ giữa đặc điểm di truyền, điều kiện môi trường và kết quả thực tế. Nếu dữ liệu không mô tả đủ ba phần ấy, một mô hình dự báo chính xác trên máy vẫn có thể thất bại khi đưa sang nơi khác."
      ],
      [
        "Thông tin mới từ VN1K-RICE",
        "Bài công bố ngày 03/11/2026 của VinUni cho biết dự án VN1K-RICE được giới thiệu tại SAGA ngày 30/10, hướng tới giải trình tự 1.000 nguồn gen lúa Việt Nam, khởi đầu với 150 mẫu. Dự án thuộc chương trình AgriOmics-AI, dự kiến kết hợp dữ liệu di truyền, đặc tính quan sát và môi trường, đồng thời ứng dụng mô hình ngôn ngữ hệ gen. Đây là kế hoạch nghiên cứu do đơn vị chủ trì công bố; chưa phải bằng chứng 1.000 mẫu đã hoàn tất hay giống mới đã tăng năng suất. [VinUni công bố VN1K-RICE](https://vinuni.edu.vn/vinuniversity-unveils-project-to-sequence-the-genomes-of-1000-vietnamese-rice-varieties-at-saga-2026/)"
      ],
      [
        "Bài học dễ mang về một dự án nhỏ",
        "Không cần phòng thí nghiệm để hiểu nguyên tắc quản lý dữ liệu. Với một bài học minh họa, tạo bảng giả gồm mã mẫu, địa điểm, thời gian, cách đo và một chỉ tiêu kết quả. Cùng một tên giống không có nghĩa hai phép đo có thể so sánh trực tiếp. Hãy thêm đơn vị, điều kiện và người kiểm tra trước khi nghĩ đến dự báo. Đây là bài tập thiết kế dữ liệu, không phải hướng dẫn canh tác hay chọn giống cho nông dân."
      ],
      [
        "Tách nơi học khỏi nơi kiểm tra",
        "Đề xuất thiết kế đánh giá: nếu dữ liệu gồm nhiều địa điểm và mùa vụ, giữ riêng một nhóm địa điểm hoặc thời kỳ chưa dùng khi phát triển mô hình để kiểm tra khả năng chuyển giao. So với một cách dự báo đơn giản có cùng đầu vào. Báo lỗi theo nhóm điều kiện, không chỉ điểm trung bình. Mô hình cần cho biết khi nào dữ liệu đầu vào nằm ngoài phạm vi đã học để chuyển sang chuyên gia thay vì cố dự báo."
      ],
      [
        "Điều chưa biết cũng cần được công bố",
        "Nguồn cho biết có kế hoạch mở dữ liệu và công cụ, nhưng bài này chưa xác minh một bộ dữ liệu hoàn chỉnh có thể tải về, điều kiện cấp phép cụ thể hoặc chi phí triển khai. Vì vậy chưa thể hướng dẫn độc giả tải VN1K-RICE rồi chạy thử như một sản phẩm đã sẵn sàng. Với nghiên cứu thực, chi phí còn có lấy mẫu, đo đạc, giải trình tự và thẩm định ngoài thực địa. Không gán một con số tiết kiệm khi chưa có thử nghiệm so sánh. [VinUni công bố VN1K-RICE](https://vinuni.edu.vn/vinuniversity-unveils-project-to-sequence-the-genomes-of-1000-vietnamese-rice-varieties-at-saga-2026/)"
      ],
      [
        "Từ AI sang sinh học, khí hậu và kinh tế",
        "Câu hỏi mở là một cải thiện về chỉ tiêu sinh học có còn hữu ích khi tính độ ổn định, chi phí và nhu cầu người trồng hay không. Một nghiên cứu tiếp nối cần phối hợp chuyên gia chọn giống, thống kê, môi trường và kinh tế nông nghiệp. Điều đáng theo dõi ở dự án là khi nào dữ liệu, phương pháp đánh giá và kết quả kiểm chứng được công bố, để người khác có thể kiểm tra và mở rộng chứ không chỉ đọc một lời hứa."
      ]
    ],
    "sources": [
      [
        "VinUni công bố VN1K-RICE",
        "https://vinuni.edu.vn/vinuniversity-unveils-project-to-sequence-the-genomes-of-1000-vietnamese-rice-varieties-at-saga-2026/"
      ]
    ],
    "illustration": "illustrations/vn1k-rice-du-lieu-truoc-ai.svg",
    "illustrationCredit": "Sơ đồ biên tập nguyên bản của dot, không phải ảnh sản phẩm hay kết quả đo.",
    "labels": [
      "Dữ liệu di truyền",
      "Môi trường",
      "Kiểm chứng thực địa"
    ],
    "color": "teal",
    "art": "VN4",
    "read": "6 phút",
    "intro": "Khi nói AI trong nông nghiệp, hình dung thường là chụp ảnh rồi nhận lời khuyên. Ở nghiên cứu chọn giống, câu hỏi sâu hơn nằm ở quan hệ giữa đặc điểm di truyền, điều kiện môi trường và kết quả thực tế. Nếu dữ liệu không mô tả đủ ba phần ấy, một mô hình dự báo chính xác trên máy vẫn có thể thất bại khi đưa sang nơi khác.",
    "note": "Biên tập hoàn chỉnh, chưa thử nghiệm thực tế. Minh họa là sơ đồ nguyên bản của ban biên tập; các phương pháp thử được nêu là đề xuất, không phải kết quả đã thực hiện."
  },
  {
    "id": "qwen-nho",
    "title": "AI không nhất thiết phải thật lớn mới hữu ích",
    "deck": "Từ Qwen3, nhìn lại cách chọn một mô hình vừa sức với công việc và máy tính của bạn.",
    "category": "AI thế giới",
    "region": "Trung Quốc",
    "kind": "Phân tích ứng dụng",
    "date": "03/11/2026",
    "sourceDate": "29/04/2025",
    "color": "teal",
    "art": "01",
    "read": "7 phút",
    "intro": "Một mô hình gây ấn tượng trên bảng xếp hạng chưa chắc là lựa chọn hợp lý cho chiếc máy đang dùng. Trước khi tải hàng chục GB, hãy bắt đầu từ việc bạn thực sự muốn làm.",
    "body": [
      [
        "Qwen3 cho thấy điều gì?",
        "Trong công bố ngày 29/4/2025, nhóm Qwen giới thiệu các mô hình nhiều kích cỡ, với trọng số mở theo Apache 2.0. Đây là tư liệu nền để hiểu lựa chọn mô hình, không phải tin ra mắt hôm nay. Những con số so sánh hiệu năng trong bài gốc là kết quả do nhà cung cấp công bố."
      ],
      [
        "Thử một việc nhỏ trước",
        "Chọn một nhiệm vụ có đáp án kiểm được: rút ba mốc thời gian từ một đoạn thông báo tự viết. Cho cùng một đầu vào, kiểm tra mô hình có bỏ sót hoặc tự thêm thông tin không. Chưa cần đưa tài liệu công việc hay thông tin khách hàng vào bài thử."
      ],
      [
        "Đừng quên chi phí ngoài mô hình",
        "Quyền sử dụng trọng số không đồng nghĩa mọi dịch vụ chạy mô hình đều miễn phí. Máy tính, bộ nhớ, điện và phí dịch vụ lưu trữ là những phần cần cân nhắc riêng. Bài này không khẳng định cấu hình tối thiểu hay giá hiện hành của một gói dịch vụ."
      ],
      [
        "Một cách chọn có căn cứ",
        "Ghi lại độ đúng, thời gian chờ và mức độ phải sửa trên cùng một nhóm ví dụ. Nếu công việc đơn giản đã đạt yêu cầu, mô hình lớn hơn chỉ đáng đổi khi giải quyết được điểm yếu cụ thể. Đừng chọn chỉ vì tên mới hoặc số tham số."
      ]
    ],
    "prompt": "Chỉ dùng nội dung sau để liệt kê các mốc thời gian. Mỗi mốc phải kèm câu gốc chứng minh. Nếu không có, ghi “không thấy trong nội dung”. Không suy đoán: [đoạn thông báo tự tạo].",
    "sources": [
      [
        "Công bố Qwen3 của nhóm phát triển",
        "https://qwenlm.github.io/blog/qwen3/"
      ]
    ],
    "note": "Bài nền tảng, không phải thông tin ra mắt mới. Chưa thử nghiệm trực tiếp mô hình. Khung thử nghiệm trong bài là đề xuất chưa triển khai, không phải báo cáo kết quả nghiên cứu.",
    "research": {
      "question": "Với tác vụ trích mốc thời gian bằng tiếng Việt, mô hình nhỏ có đáp ứng tiêu chí chất lượng đã chọn mà tiết kiệm thời gian hoặc tài nguyên hơn không?",
      "evidence": "Nguồn [1] là công bố của nhóm phát triển Qwen, xác nhận dòng mô hình và điều kiện phát hành tại thời điểm công bố. Các so sánh hiệu năng trong nguồn là tuyên bố của nhà cung cấp, không phải phép đo độc lập của bản tin. Nguồn này chưa chứng minh chất lượng trên dữ liệu tiếng Việt hoặc máy của người đọc. Vì vậy, bài chỉ đề xuất cách kiểm tra lựa chọn, không kết luận mô hình nào thắng.",
      "method": "Đề xuất thử nghiệm, chưa thực hiện: chuẩn bị khoảng 20 đoạn văn giả lập, gồm ngày viết tắt, nhiều sự kiện và đoạn không có ngày; lập đáp án trước. Dùng cùng bộ dữ liệu cho hai mô hình, ghi phiên bản, chế độ suy luận, lượng tử hóa, phần cứng và thiết lập sinh. Chạy lặp ít nhất ba lần cho mỗi đoạn. Giữ một nhóm đoạn riêng để kiểm tra lại sau khi chỉnh prompt, tránh chỉ tối ưu cho các ví dụ đã thấy.",
      "measure": "Ghi số mốc đúng, số mốc bị bỏ sót, số mốc tự thêm; tính tỷ lệ mốc đúng trên tất cả mốc được trả về và tỷ lệ tìm đủ so với đáp án. Đo thời gian chờ và phút sửa tay. Báo cả từng trường hợp lỗi, không chỉ một điểm trung bình. So sánh trên máy khác nhau hoặc thiết lập khác nhau chỉ phản ánh toàn bộ cấu hình đó, không tách riêng được ảnh hưởng kích cỡ mô hình.",
      "conditions": "Chỉ áp dụng kết quả cho loại dữ liệu và thiết lập đã thử. Mẫu 20 đoạn là kiểm tra ban đầu, chưa đại diện mọi văn bản. Cần người kiểm đáp án; khi sai một ngày có thể gây hậu quả lớn, không tự động dùng đầu ra để ra quyết định. Dùng dữ liệu giả, kiểm tra giấy phép bản mô hình cụ thể và chi phí dịch vụ trước khi triển khai.",
      "next": "Hướng mở rộng: kết hợp xử lý ngôn ngữ tiếng Việt với thiết kế giao diện để người dùng xem câu nguồn bên cạnh mốc trích xuất; nghiên cứu liệu cách hiển thị này giảm thời gian kiểm tra và lỗi bỏ qua hay không. Đây là câu hỏi nghiên cứu, chưa phải kết quả đã xác nhận."
    }
  },
  {
    "id": "prompt-ro-viec",
    "title": "Đừng xin AI “viết hay hơn”. Hãy cho nó biết việc cần làm",
    "deck": "Một yêu cầu rõ đầu vào, đầu ra và giới hạn thường có ích hơn một đoạn prompt dài đầy mỹ từ.",
    "category": "Làm được ngay",
    "region": "Mỹ",
    "kind": "Phân tích ứng dụng",
    "date": "03/11/2026",
    "color": "orange",
    "art": "02",
    "read": "7 phút",
    "intro": "Bạn muốn AI soạn một thông báo ngắn. Nó trả lại một bài diễn văn. Vấn đề có thể không nằm ở khả năng viết, mà ở chỗ yêu cầu chưa nói rõ thông báo dành cho ai và phải giữ những gì.",
    "body": [
      [
        "Bắt đầu bằng bốn dòng",
        "Ghi rõ người đọc, việc cần làm, dữ kiện bắt buộc và định dạng đầu ra. Tài liệu hướng dẫn của Google khuyến nghị chỉ dẫn cụ thể, cung cấp ngữ cảnh và ví dụ; đồng thời nhấn mạnh phải thử rồi điều chỉnh."
      ],
      [
        "Một ví dụ tự tạo",
        "Giả sử bạn mở buổi học vẽ miễn phí cho người mới vào 9 giờ sáng thứ Bảy tại phòng A. Thay vì yêu cầu “viết hấp dẫn”, hãy nêu: tối đa 90 chữ, giọng thân thiện, không tự thêm số điện thoại, quà tặng hay ưu đãi. Đây là tình huống minh họa, không phải một sự kiện có thật."
      ],
      [
        "Đọc lại bằng danh sách kiểm",
        "So từng dữ kiện với đầu vào. Kiểm tra AI có tự bịa thời lượng, địa chỉ hay điều kiện đăng ký không. Chỉnh một yếu tố mỗi lần để biết điều gì thực sự cải thiện đầu ra."
      ],
      [
        "Không cần mua thêm để thử cách viết",
        "Bạn có thể áp dụng cách đặt yêu cầu này trên công cụ AI đang dùng. Khả năng, hạn mức và phí phụ thuộc dịch vụ; bài không bảo đảm một gói miễn phí cụ thể. Chỉ dùng ví dụ giả hoặc dữ liệu được phép chia sẻ."
      ]
    ],
    "prompt": "Viết thông báo cho người mới học vẽ. Dữ kiện: buổi học miễn phí, 9 giờ sáng thứ Bảy, phòng A. Tối đa 90 chữ, giọng thân thiện. Không tự thêm thông tin liên hệ, quà tặng, thời lượng hoặc cách đăng ký. Sau bản nháp, liệt kê dữ kiện còn thiếu để tôi bổ sung.",
    "sources": [
      [
        "Google: chiến lược thiết kế prompt",
        "https://ai.google.dev/gemini-api/docs/prompting-strategies"
      ]
    ],
    "note": "Ví dụ và quy trình biên tập do ban biên tập đề xuất. Chưa kiểm thử trên một phiên bản mô hình cụ thể. Khung thử nghiệm trong bài là đề xuất chưa triển khai, không phải báo cáo kết quả nghiên cứu.",
    "research": {
      "question": "Yêu cầu có cấu trúc có làm giảm dữ kiện bịa và công sửa thông báo so với yêu cầu chung chung trên cùng một công cụ không?",
      "evidence": "Nguồn [1] là hướng dẫn kỹ thuật của Google về thiết kế prompt, không phải nghiên cứu độc lập định lượng hiệu quả trong mọi ngành. Tài liệu nhấn mạnh tính cụ thể và quá trình thử, chỉnh. Ví dụ lớp vẽ trong bài do ban biên tập tạo; không có đầu ra thử nghiệm hoặc tỷ lệ cải thiện đã đo.",
      "method": "Đề xuất thử nghiệm, chưa thực hiện: tạo mười bản dữ kiện giả về sự kiện. Với mỗi bản, dùng hai yêu cầu: bản ngắn chung chung và bản có người đọc, dữ kiện, độ dài, giới hạn. Giữ nguyên công cụ, phiên bản và dữ liệu; dùng phiên chat mới cho từng lượt để giảm ảnh hưởng ngữ cảnh. Lặp ba lần, đổi thứ tự chạy hai cách. Nhờ một người đánh giá bản A/B đã bỏ nhãn prompt nếu có thể.",
      "measure": "Chấm riêng: số dữ kiện bắt buộc giữ đúng, số thông tin tự thêm, vi phạm độ dài và thời gian sửa để dùng được. Tách mức dễ đọc khỏi độ chính xác; một bản trôi chảy vẫn có thể sai. Lưu cả bản không tốt và tiêu chí chấm trước khi xem kết quả. Chưa nên suy ra quan hệ nhân quả từ một cặp đầu ra duy nhất.",
      "conditions": "Phương pháp phù hợp tác vụ soạn thảo có dữ kiện xác định. Không bảo đảm đúng với sáng tác tự do, tư vấn chuyên môn hoặc công cụ khác. Khác biệt giữa người chấm, phiên bản mô hình và ngôn ngữ có thể ảnh hưởng kết quả. Không đưa dữ liệu khách hàng thật vào thử nghiệm khi chưa có quyền và phương án bảo vệ.",
      "next": "Hướng mở rộng: phối hợp ngôn ngữ học, thiết kế truyền thông và tâm lý học nhận thức để thử khả năng người đọc hiểu đúng, thay vì chỉ chấm câu văn hay. Có thể so sánh bản dành cho người mới với bản dành cho chuyên gia, nhưng phải xác định đối tượng trước và không đánh đồng hai nhóm."
    }
  },
  {
    "id": "code-ai-kiem-thu",
    "title": "App chạy được chưa có nghĩa là đã làm xong",
    "deck": "Ba câu hỏi nên đặt trước khi nhận đoạn mã do AI viết: có hiểu được, có kiểm được, có sửa được không?",
    "category": "Lập trình & game",
    "region": "Mỹ",
    "kind": "Phân tích ứng dụng",
    "date": "03/11/2026",
    "color": "blue",
    "art": "03",
    "read": "7 phút",
    "intro": "Một nút bấm hoạt động trên máy bạn là khởi đầu tốt. Nhưng nếu ô nhập bỏ trống, người dùng bấm hai lần, hoặc mạng bị ngắt, ứng dụng có còn làm đúng?",
    "body": [
      [
        "Tách việc trước khi giao cho AI",
        "GitHub khuyến nghị chia nhiệm vụ phức tạp thành phần nhỏ, nêu yêu cầu cụ thể và cung cấp ví dụ. Đừng bắt đầu bằng “làm toàn bộ app bán hàng”. Hãy bắt đầu bằng một biểu mẫu có điều kiện đúng sai rõ ràng."
      ],
      [
        "Thử cả tình huống không đẹp",
        "Với một ô ghi chú, thử nhập trống, chuỗi rất dài và ký tự tiếng Việt. Thử bấm lưu hai lần, tải lại trang và quay về màn hình trước. Đây là bộ câu hỏi thực hành do ban biên tập đề xuất, không phải một chứng nhận bảo mật."
      ],
      [
        "Yêu cầu giải thích trước khi nhận mã",
        "Nhờ AI chỉ ra nơi lưu dữ liệu, cách xử lý lỗi và những tình huống chưa hỗ trợ. GitHub nhấn mạnh người dùng vẫn phải hiểu, rà soát và kiểm thử mã được đề xuất; công cụ không thay trách nhiệm kỹ thuật của bạn."
      ],
      [
        "Bản thử và sản phẩm thật là hai mốc khác nhau",
        "Thử trên dữ liệu giả. Không dán khóa API hoặc mật khẩu vào cuộc chat. Trước khi đưa ứng dụng có dữ liệu người thật lên mạng, cần kiểm tra quyền truy cập, lưu trữ và bảo mật phù hợp. Bài không yêu cầu mua Copilot và không xác nhận giá dịch vụ hiện hành."
      ]
    ],
    "prompt": "Trước khi sửa mã, hãy liệt kê hành vi mong đợi, các tình huống lỗi và cách kiểm tra. Sau khi đề xuất mã, giải thích từng thay đổi, phần chưa kiểm thử và cách chạy lại kiểm thử. Không nói đã chạy nếu chưa thực sự chạy.",
    "sources": [
      [
        "GitHub: cách sử dụng Copilot hiệu quả",
        "https://docs.github.com/en/copilot/get-started/best-practices"
      ]
    ],
    "note": "Hướng dẫn phương pháp, không phải bài đánh giá hiệu năng hay kiểm toán bảo mật. Khung thử nghiệm trong bài là đề xuất chưa triển khai, không phải báo cáo kết quả nghiên cứu.",
    "research": {
      "question": "Việc viết điều kiện kiểm tra trước khi nhờ AI tạo mã có giúp giảm lỗi chức năng và công sửa so với chỉ mô tả giao diện không?",
      "evidence": "Nguồn [1] là tài liệu thực hành của GitHub, nhấn mạnh rà soát và kiểm thử mã do Copilot đề xuất. Đây không phải chứng cứ rằng quy trình trong bài đã làm tăng năng suất một tỷ lệ cụ thể. Danh sách tình huống ô ghi chú là đề xuất biên tập, chưa được chạy như một thí nghiệm so sánh.",
      "method": "Đề xuất thử nghiệm, chưa thực hiện: dùng một ứng dụng ghi chú nhỏ với dữ liệu giả và môi trường riêng. Viết trước hành vi mong đợi cho thêm, sửa, lưu, tải lại và nhập sai. Tạo hai nhánh từ cùng mã gốc: một nhánh chỉ yêu cầu chức năng, nhánh kia cung cấp cả các điều kiện kiểm tra. Giữ phiên bản mô hình, thư viện và phạm vi thay đổi giống nhau. Lưu bản vá, lệnh chạy và nhật ký lỗi; để người khác rà các kiểm thử nếu có thể.",
      "measure": "Đếm điều kiện đạt, lỗi tái xuất hiện và thời gian sửa tay; ghi cả thời gian viết và bảo trì kiểm thử, không chỉ thời gian AI sinh mã. Dùng các ca kiểm tra chưa đưa cho AI để xem mã có đáp ứng hành vi hay chỉ khớp ví dụ. Một lần chạy thành công hoặc một bộ test xanh chưa chứng minh phần mềm an toàn.",
      "conditions": "Thử nghiệm nhỏ không đại diện hệ thống thanh toán, y tế hoặc dữ liệu nhạy cảm. Chất lượng kiểm thử và kinh nghiệm người đánh giá có thể quyết định kết quả. Cần kiểm tra quyền truy cập, phụ thuộc, giấy phép và bảo mật riêng trước triển khai thật; không dùng lỗi chức năng làm thước đo duy nhất.",
      "next": "Hướng mở rộng: kết hợp kỹ thuật phần mềm và nghiên cứu tương tác người–máy để xem người dùng có hiểu mã, phát hiện gợi ý sai và sửa lỗi sau một tuần hay không. Đánh giá khả năng bảo trì có thể quan trọng hơn tốc độ làm bản demo; hiện đây chỉ là hướng khảo sát."
    }
  }
];
